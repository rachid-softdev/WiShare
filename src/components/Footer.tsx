"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Heart, Github, Mail, Shield } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.8 }}
      className="mt-16 border-t border-border/40"
    >
      <div className="max-w-4xl mx-auto p-6">
        <Card className="p-6 bg-card/50 backdrop-blur-sm">
          <div className="grid md:grid-cols-3 gap-6">
            {/* Brand Section */}
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <span className="text-2xl">🧩</span>
                <h3 className="font-bold text-lg bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  WiShare
                </h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Partage ton Wi-Fi en un scan — propre, sûr et rapide.
              </p>
              <div className="flex items-center gap-1 text-xs text-muted-foreground">
                <span>Made with</span>
                <Heart className="w-3 h-3 text-red-500 fill-red-500" />
                <span>par WiShare</span>
              </div>
            </div>

            {/* Features */}
            <div className="space-y-3">
              <h4 className="font-semibold text-sm">Fonctionnalités</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <span className="text-xs">⚡</span>
                  Génération instantanée
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-xs">🔒</span>
                  Sécurisé et privé
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-xs">📱</span>
                  Compatible mobiles
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-xs">💾</span>
                  Export haute qualité
                </li>
              </ul>
            </div>

            {/* Contact & Legal */}
            <div className="space-y-3">
              <h4 className="font-semibold text-sm">Contact & Légal</h4>
              <div className="space-y-2">
                <a 
                  href="mailto:contact@wishare.app" 
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors group"
                >
                  <Mail className="w-3 h-3 group-hover:scale-110 transition-transform" />
                  Support
                </a>
                <a 
                  href="#" 
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors group"
                >
                  <Shield className="w-3 h-3 group-hover:scale-110 transition-transform" />
                  Politique de confidentialité
                </a>
                <a 
                  href="#" 
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors group"
                >
                  <Github className="w-3 h-3 group-hover:scale-110 transition-transform" />
                  Code source
                </a>
              </div>
            </div>
          </div>

          <Separator className="my-6" />

          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
            <p>© {currentYear} WiShare. Tous droits réservés.</p>
            <p>Généré avec ❤️ et React</p>
          </div>
        </Card>
      </div>
    </motion.footer>
  );
}