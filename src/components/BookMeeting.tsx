import { useState } from "react";
import { Mail, Building, Calendar, User, MessageSquare } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const BookMeeting = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    date: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create mailto link with form data
    const subject = encodeURIComponent(`Meeting Request from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nCompany: ${formData.company}\nEmail: ${formData.email}\nPreferred Date/Time: ${formData.date}\n\nMessage:\n${formData.message}`
    );
    
    window.location.href = `mailto:sales@shaqx.com?subject=${subject}&body=${body}`;
    
    toast({
      title: t("booking.successTitle"),
      description: t("booking.successMessage"),
    });
    
    // Reset form
    setFormData({
      name: "",
      company: "",
      email: "",
      date: "",
      message: "",
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="booking" className="py-24 px-6">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              {t("booking.heading")} <span className="text-gradient">{t("booking.headingGradient")}</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              {t("booking.subheading")}
            </p>
          </div>

          <div className="glass p-8 md:p-12 rounded-xl animate-scale-in">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium flex items-center gap-2">
                    <User className="w-4 h-4 text-primary" />
                    {t("booking.name")}
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder={t("booking.namePlaceholder")}
                    className="bg-background/50"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="company" className="text-sm font-medium flex items-center gap-2">
                    <Building className="w-4 h-4 text-primary" />
                    {t("booking.company")}
                  </label>
                  <Input
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    required
                    placeholder={t("booking.companyPlaceholder")}
                    className="bg-background/50"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium flex items-center gap-2">
                    <Mail className="w-4 h-4 text-primary" />
                    {t("booking.email")}
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder={t("booking.emailPlaceholder")}
                    className="bg-background/50"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="date" className="text-sm font-medium flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-primary" />
                    {t("booking.date")}
                  </label>
                  <Input
                    id="date"
                    name="date"
                    type="datetime-local"
                    value={formData.date}
                    onChange={handleChange}
                    required
                    className="bg-background/50"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium flex items-center gap-2">
                  <MessageSquare className="w-4 h-4 text-primary" />
                  {t("booking.message")}
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder={t("booking.messagePlaceholder")}
                  rows={5}
                  className="bg-background/50"
                />
              </div>

              <Button type="submit" size="lg" className="w-full md:w-auto">
                {t("booking.submit")}
              </Button>
            </form>
          </div>

          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-4">{t("booking.orContact")}</p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="mailto:sales@shaqx.com"
                className="inline-flex items-center gap-2 text-primary hover:text-secondary transition-colors"
              >
                <Mail className="w-4 h-4" />
                sales@shaqx.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookMeeting;
