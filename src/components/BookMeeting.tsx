import { useState } from "react";
import { Mail, Building, User, MessageSquare } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Navn er påkrævet").max(100, "Navn må max være 100 tegn"),
  company: z.string().trim().max(100, "Firmanavn må max være 100 tegn").optional(),
  email: z.string().trim().email("Ugyldig email adresse").max(255, "Email må max være 255 tegn"),
  message: z.string().trim().min(1, "Besked er påkrævet").max(1000, "Besked må max være 1000 tegn"),
});

const Contact = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form data
    try {
      contactSchema.parse(formData);
    } catch (error) {
      if (error instanceof z.ZodError) {
        toast({
          title: "Valideringsfejl",
          description: error.errors[0].message,
          variant: "destructive",
        });
        return;
      }
    }
    
    const form = e.target as HTMLFormElement;
    const netlifyFormData = new FormData(form);
    
    try {
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(netlifyFormData as any).toString(),
      });
      
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      
      toast({
        title: t("contact.successTitle"),
        description: t("contact.successMessage"),
      });
      
      // Reset form
      setFormData({
        name: "",
        company: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error("Form submission error:", error);
      toast({
        title: "Error",
        description: "Der opstod en fejl. Prøv venligst igen.",
        variant: "destructive",
      });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contact" className="py-16 md:py-24 px-4 md:px-6">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 md:mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              {t("contact.heading")} <span className="text-gradient">{t("contact.headingGradient")}</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground">
              {t("contact.subheading")}
            </p>
          </div>

          <div className="glass p-6 md:p-8 lg:p-12 rounded-xl animate-scale-in">
            <form 
              name="contact" 
              method="POST" 
              data-netlify="true" 
              data-netlify-honeypot="bot-field"
              onSubmit={handleSubmit} 
              className="space-y-6"
            >
              <input type="hidden" name="form-name" value="contact" />
              <input type="hidden" name="bot-field" />
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium flex items-center gap-2">
                    <User className="w-4 h-4 text-primary" />
                    {t("contact.name")}
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder={t("contact.namePlaceholder")}
                    className="bg-background/50 h-12 md:h-10"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="company" className="text-sm font-medium flex items-center gap-2">
                    <Building className="w-4 h-4 text-primary" />
                    {t("contact.company")}
                  </label>
                  <Input
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder={t("contact.companyPlaceholder")}
                    className="bg-background/50 h-12 md:h-10"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium flex items-center gap-2">
                  <Mail className="w-4 h-4 text-primary" />
                  {t("contact.email")}
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder={t("contact.emailPlaceholder")}
                  className="bg-background/50 h-12 md:h-10"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium flex items-center gap-2">
                  <MessageSquare className="w-4 h-4 text-primary" />
                  {t("contact.message")}
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder={t("contact.messagePlaceholder")}
                  rows={5}
                  className="bg-background/50"
                />
              </div>

              <Button type="submit" size="lg" className="w-full md:w-auto min-h-[48px]">
                {t("contact.submit")}
              </Button>
            </form>
          </div>

          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-4">{t("contact.orContact")}</p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="mailto:info@shaqx.com"
                className="inline-flex items-center gap-2 text-primary hover:text-secondary transition-colors"
              >
                <Mail className="w-4 h-4" />
                info@shaqx.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
