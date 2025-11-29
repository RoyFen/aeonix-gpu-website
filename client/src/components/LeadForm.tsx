import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { toast } from "sonner";
import { X } from "lucide-react";

interface LeadFormProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function LeadForm({ open, onOpenChange }: LeadFormProps) {
  const { t } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    product: "",
    contact: "",
    quantity: "",
    purpose: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Send form data to n8n webhook
      const response = await fetch(
        "https://dong-win.app.n8n.cloud/webhook/aeonix-gpu-inquiry",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to submit form");
      }

      // Try to parse JSON response, but handle empty responses gracefully
      let result = { message: t.leadForm.successMessage };
      const contentType = response.headers.get("content-type");
      if (contentType && contentType.includes("application/json")) {
        try {
          const text = await response.text();
          if (text) {
            result = JSON.parse(text);
          }
        } catch (e) {
          console.warn("Failed to parse JSON response, using default message");
        }
      }

      toast.success(t.leadForm.successTitle, {
        description: result.message || t.leadForm.successMessage,
      });

      // Reset form
      setFormData({
        email: "",
        name: "",
        product: "",
        contact: "",
        quantity: "",
        purpose: "",
        message: "",
      });

      // Close dialog after 2 seconds
      setTimeout(() => {
        onOpenChange(false);
      }, 2000);
    } catch (error) {
      console.error("Form submission error:", error);
      toast.error(t.leadForm.errorTitle, {
        description: t.leadForm.errorMessage,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">
            {t.leadForm.title}
          </DialogTitle>
          <DialogDescription>{t.leadForm.subtitle}</DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6 mt-4">
          {/* Email - Required */}
          <div className="space-y-2">
            <Label htmlFor="email" className="text-sm font-medium">
              {t.leadForm.emailLabel} <span className="text-destructive">*</span>
            </Label>
            <Input
              id="email"
              type="email"
              required
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              placeholder={t.leadForm.emailPlaceholder}
              className="w-full"
            />
          </div>

          {/* Name - Optional */}
          <div className="space-y-2">
            <Label htmlFor="name" className="text-sm font-medium">
              {t.leadForm.nameLabel}
            </Label>
            <Input
              id="name"
              type="text"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              placeholder={t.leadForm.namePlaceholder}
              className="w-full"
            />
          </div>

          {/* Product Selection - Required */}
          <div className="space-y-2">
            <Label htmlFor="product" className="text-sm font-medium">
              {t.leadForm.productLabel} <span className="text-destructive">*</span>
            </Label>
            <Select
              required
              value={formData.product}
              onValueChange={(value) =>
                setFormData({ ...formData, product: value })
              }
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder={t.leadForm.productPlaceholder} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="rtx4090">
                  {t.leadForm.productOptions.rtx4090}
                </SelectItem>
                <SelectItem value="rtx4080">
                  {t.leadForm.productOptions.rtx4080}
                </SelectItem>
                <SelectItem value="rtx4070ti">
                  {t.leadForm.productOptions.rtx4070ti}
                </SelectItem>
                <SelectItem value="rx7900xtx">
                  {t.leadForm.productOptions.rx7900xtx}
                </SelectItem>
                <SelectItem value="other">
                  {t.leadForm.productOptions.other}
                </SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Contact Method - Required */}
          <div className="space-y-2">
            <Label htmlFor="contact" className="text-sm font-medium">
              {t.leadForm.contactLabel} <span className="text-destructive">*</span>
            </Label>
            <Input
              id="contact"
              type="text"
              required
              value={formData.contact}
              onChange={(e) =>
                setFormData({ ...formData, contact: e.target.value })
              }
              placeholder={t.leadForm.contactPlaceholder}
              className="w-full"
            />
          </div>

          {/* Quantity - Optional */}
          <div className="space-y-2">
            <Label htmlFor="quantity" className="text-sm font-medium">
              {t.leadForm.quantityLabel}
            </Label>
            <Input
              id="quantity"
              type="text"
              value={formData.quantity}
              onChange={(e) =>
                setFormData({ ...formData, quantity: e.target.value })
              }
              placeholder={t.leadForm.quantityPlaceholder}
              className="w-full"
            />
          </div>

          {/* Purpose - Optional */}
          <div className="space-y-2">
            <Label htmlFor="purpose" className="text-sm font-medium">
              {t.leadForm.purposeLabel}
            </Label>
            <Select
              value={formData.purpose}
              onValueChange={(value) =>
                setFormData({ ...formData, purpose: value })
              }
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder={t.leadForm.purposePlaceholder} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="build">
                  {t.leadForm.purposeOptions.build}
                </SelectItem>
                <SelectItem value="upgrade">
                  {t.leadForm.purposeOptions.upgrade}
                </SelectItem>
                <SelectItem value="workstation">
                  {t.leadForm.purposeOptions.workstation}
                </SelectItem>
                <SelectItem value="other">
                  {t.leadForm.purposeOptions.other}
                </SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Message - Optional */}
          <div className="space-y-2">
            <Label htmlFor="message" className="text-sm font-medium">
              {t.leadForm.messageLabel}
            </Label>
            <Textarea
              id="message"
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              placeholder={t.leadForm.messagePlaceholder}
              className="w-full min-h-[100px]"
            />
          </div>

          {/* Submit Button */}
          <div className="flex gap-3 pt-4">
            <Button
              type="submit"
              disabled={isSubmitting}
              className="flex-1 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700"
            >
              {isSubmitting ? t.leadForm.submitting : t.leadForm.submitButton}
            </Button>
            <Button
              type="button"
              variant="outline"
              onClick={() => onOpenChange(false)}
              className="px-6"
            >
              {t.leadForm.closeButton}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
