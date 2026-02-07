"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { QRCodeSVG } from "qrcode.react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Wifi, Download, Eye, Share2 } from "lucide-react";
import { toast } from "sonner";

interface WiFiCredentials {
  ssid: string;
  password: string;
  security: "WPA" | "WEP" | "nopass";
  hidden?: boolean;
}

export default function QRCodeGenerator() {
  const [credentials, setCredentials] = useState<WiFiCredentials>({
    ssid: "",
    password: "",
    security: "WPA",
    hidden: false,
  });
  
  const [showQR, setShowQR] = useState(false);

  const generateWiFiString = (creds: WiFiCredentials): string => {
    const { ssid, password, security, hidden } = creds;
    return `WIFI:T:${security};S:${ssid};P:${password};H:${hidden ? 'true' : 'false'};;`;
  };

  const handleGenerate = () => {
    if (!credentials.ssid.trim()) {
      toast.error("Le nom du réseau (SSID) est requis");
      return;
    }
    
    if (credentials.security !== "nopass" && !credentials.password.trim()) {
      toast.error("Le mot de passe est requis pour un réseau sécurisé");
      return;
    }
    
    setShowQR(true);
    toast.success("QR Code généré avec succès !");
  };

  const handleDownloadClick = () => {
    toast.info("Téléchargement disponible après connexion à Supabase pour le paiement sécurisé");
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "QR Code Wi-Fi - WiShare",
          text: `QR Code pour le réseau Wi-Fi: ${credentials.ssid}`,
          url: window.location.href,
        });
      } catch (error) {
        toast.error("Erreur lors du partage");
      }
    } else {
      toast.info("Partage non supporté sur ce navigateur");
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center space-y-4"
      >
        <div className="flex items-center justify-center gap-3">
          <span className="text-4xl">🧩</span>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            WiShare
          </h1>
        </div>
        <p className="text-xl text-muted-foreground">
          Partage ton Wi-Fi en un scan — propre, sûr et rapide.
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Form Section */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Card className="p-6 space-y-6">
            <div className="flex items-center gap-2 mb-4">
              <Wifi className="h-5 w-5 text-primary" />
              <h2 className="text-xl font-semibold">Informations Wi-Fi</h2>
            </div>

            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="ssid">Nom du réseau (SSID) *</Label>
                <Input
                  id="ssid"
                  placeholder="MonWiFi"
                  value={credentials.ssid}
                  onChange={(e) => setCredentials(prev => ({ ...prev, ssid: e.target.value }))}
                  className="font-mono"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="security">Type de sécurité</Label>
                <Select
                  value={credentials.security}
                  onValueChange={(value: "WPA" | "WEP" | "nopass") => 
                    setCredentials(prev => ({ ...prev, security: value }))
                  }
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="WPA">WPA/WPA2 (recommandé)</SelectItem>
                    <SelectItem value="WEP">WEP (ancien)</SelectItem>
                    <SelectItem value="nopass">Aucune (réseau ouvert)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {credentials.security !== "nopass" && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="space-y-2"
                >
                  <Label htmlFor="password">Mot de passe *</Label>
                  <Input
                    id="password"
                    type="password"
                    placeholder="••••••••"
                    value={credentials.password}
                    onChange={(e) => setCredentials(prev => ({ ...prev, password: e.target.value }))}
                    className="font-mono"
                  />
                </motion.div>
              )}

              <Button 
                onClick={handleGenerate} 
                className="w-full gradient-primary hover:glow-primary transition-all duration-300"
                size="lg"
              >
                <Eye className="mr-2 h-4 w-4" />
                Générer QR Code
              </Button>
            </div>
          </Card>
        </motion.div>

        {/* QR Code Preview Section */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
        >
          <Card className="p-6 h-full flex flex-col">
            <h2 className="text-xl font-semibold mb-4">Aperçu QR Code</h2>
            
            <div className="flex-1 flex items-center justify-center">
              <AnimatePresence mode="wait">
                {showQR ? (
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    exit={{ scale: 0, rotate: 180 }}
                    transition={{ type: "spring", duration: 0.8 }}
                    className="text-center space-y-6"
                  >
                    <div className="p-4 bg-white rounded-xl animate-pulse-glow">
                      <QRCodeSVG
                        value={generateWiFiString(credentials)}
                        size={200}
                        level="M"
                        includeMargin
                        fgColor="#22c55e"
                        bgColor="#ffffff"
                      />
                    </div>
                    
                    <div className="space-y-3">
                      <p className="text-sm text-muted-foreground">
                        <strong>Réseau:</strong> {credentials.ssid}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        <strong>Sécurité:</strong> {credentials.security}
                      </p>
                    </div>

                    <Separator />

                    <div className="grid grid-cols-2 gap-3">
                      <Button
                        onClick={handleDownloadClick}
                        variant="default"
                        className="gradient-primary"
                      >
                        <Download className="mr-2 h-4 w-4" />
                        Télécharger (3€)
                      </Button>
                      <Button
                        onClick={handleShare}
                        variant="outline"
                      >
                        <Share2 className="mr-2 h-4 w-4" />
                        Partager
                      </Button>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-center space-y-4 text-muted-foreground"
                  >
                    <div className="animate-float">
                      <Wifi className="h-16 w-16 mx-auto opacity-50" />
                    </div>
                    <p>Remplissez le formulaire pour générer votre QR Code</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </Card>
        </motion.div>
      </div>

      {/* Info Cards */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="grid md:grid-cols-3 gap-4"
      >
        <Card className="p-4 text-center">
          <span className="text-2xl mb-2 block">⚡</span>
          <h3 className="font-semibold mb-1">Instantané</h3>
          <p className="text-sm text-muted-foreground">Génération en temps réel</p>
        </Card>
        <Card className="p-4 text-center">
          <span className="text-2xl mb-2 block">🔒</span>
          <h3 className="font-semibold mb-1">Sécurisé</h3>
          <p className="text-sm text-muted-foreground">Vos données restent privées</p>
        </Card>
        <Card className="p-4 text-center">
          <span className="text-2xl mb-2 block">📱</span>
          <h3 className="font-semibold mb-1">Compatible</h3>
          <p className="text-sm text-muted-foreground">Fonctionne sur tous les appareils</p>
        </Card>
      </motion.div>
    </div>
  );
}