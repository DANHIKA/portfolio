"use client";

import { motion } from "framer-motion";
import { Grid } from "@/components/ui/grid";

interface Certification {
  id: string;
  name: string;
  issuer: string;
  date: string;
  imageUrl?: string;
  credentialUrl?: string;
}

export default function Certifications() {
  const certifications: Certification[] = [
    {
      id: "1",
      name: "Gen AI Professional",
      issuer: "Oracle",
      date: "2023",
      imageUrl: "/badges/ai_professional.png",
      credentialUrl: "https://catalog-education.oracle.com/pls/certview/sharebadge?id=01F3A74F9403364090B31985DBCC7FF626F5E266FFE271BE00FFF6DF788BB877"
    },
    {
      id: "2", 
      name: "AI Foundations",
      issuer: "Oracle",
      date: "2023",
      imageUrl: "/badges/ai_foundations.png",
      credentialUrl: "https://catalog-education.oracle.com/pls/certview/sharebadge?id=81C5B4784BF10D217774389C383C65756FB1D8D5C83815F596E8E45FCF9CE318"
    },
    {
      id: "3",
      name: "Data Foundations",
      issuer: "Oracle",
      date: "2023",
      imageUrl: "/badges/data_foundations.png",
      credentialUrl: "https://catalog-education.oracle.com/pls/certview/sharebadge?id=606F5A0D426E4D2A69B83416999081A135025FAC733E9FA8ECB3B19752999CF9"
    },
    {
      id: "4",
      name: "OCI Foundations",
      issuer: "Oracle",
      date: "2022",
      imageUrl: "/badges/oci_foundations.png",
      credentialUrl: "https://catalog-education.oracle.com/pls/certview/sharebadge?id=606F5A0D426E4D2A69B83416999081A135025FAC733E9FA8ECB3B19752999CF9"
    }
  ];

  return (
    <section id="certifications" className="relative flex flex-col items-center overflow-hidden py-16">
      <div className="relative z-10 flex w-full flex-col items-center justify-center px-4">
        {/* Mobile: Stacked layout */}
        <div className="w-full max-w-6xl block md:hidden">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="mb-16 text-center"
          >
            <p className="text-center text-base font-semibold leading-7 text-foreground">Certifications</p>
            <h2 className="mx-auto mt-2 max-w-2xl text-center text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-primary">
              Professional Credentials
            </h2>
          </motion.div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col items-center justify-center p-4 text-center border border-border rounded-lg cursor-pointer"
                onClick={() => cert.credentialUrl && window.open(cert.credentialUrl, '_blank')}
              >
                <div className="flex items-center justify-center mb-3">
                  {cert.imageUrl ? (
                    <img 
                      src={cert.imageUrl} 
                      alt={cert.name}
                      className="w-56 h-56 sm:w-28 sm:h-28 object-contain"
                    />
                  ) : (
                    <div className="w-6 h-6 bg-muted rounded"></div>
                  )}
                </div>
                <h3 className="mb-1 text-sm font-semibold text-foreground">{cert.name}</h3>
                <p className="text-xs text-muted-foreground">{cert.issuer}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Desktop: Left text, Right grid */}
        <div className="w-full max-w-6xl hidden md:flex md:items-center md:justify-between md:gap-12">
          {/* Left side - Headings and minimal text */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex-1 text-left"
          >
            <p className="text-base font-semibold leading-7 text-foreground">Certifications</p>
            <h2 className="mt-2 text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-primary mb-6">
              Professional Credentials
            </h2>
            <p className="text-muted-foreground mb-6">
              Oracle-certified expertise in cloud infrastructure, artificial intelligence, and data foundations technologies.
            </p>
          </motion.div>

          {/* Right side - Grid of certifications */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex-1"
          >
            <Grid 
              columns={2} 
              rows={2} 
              height="h-auto" 
              width="w-full"
              showPlusIcons={true}
              className="border-border"
            >
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  className="flex flex-col items-center justify-center p-2 text-center group cursor-pointer"
                  onClick={() => cert.credentialUrl && window.open(cert.credentialUrl, '_blank')}
                >
                  <div className="flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                    {cert.imageUrl ? (
                      <img 
                        src={cert.imageUrl} 
                        alt={cert.name}
                        className="w-32 h-32 md:w-40 md:h-40 lg:w-60 lg:h-60 object-contain"
                      />
                    ) : (
                      <div className="w-8 h-8 bg-muted rounded"></div>
                    )}
                  </div>
                  <h3 className="mb-2 text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                    {cert.name}
                  </h3>
                  <p className="text-xs text-muted-foreground">{cert.issuer}</p>
                </motion.div>
              ))}
            </Grid>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
