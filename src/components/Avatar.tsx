import { useState } from "react";
import { cvData } from "../data/cvData";
import profilePhoto from "../assets/manel.jpg";

type AvatarProps = { className?: string };

// ============================================================================
//  RÉGLAGES DE LA PHOTO DE PROFIL  —  modifie ces 2 valeurs pour la positionner
// ============================================================================
//  PHOTO_POSITION : "horizontal vertical"
//     ex. "center center" (milieu), "center top" (vers le haut),
//         "center 30%" (un peu vers le haut), "50% 65%" (un peu vers le bas)
const PHOTO_POSITION = "center center";
//  PHOTO_ZOOM : 1 = normal · 1.2 = zoom avant (rapproche) · 0.9 = dézoom (éloigne)
const PHOTO_ZOOM = 1;
// ============================================================================

/**
 * Affiche la photo de profil (src/assets/manel.jpg) dans un cadre rond.
 * En cas d'erreur de chargement, repli sur un avatar à initiales.
 */
const Avatar = ({ className = "" }: AvatarProps) => {
  const [failed, setFailed] = useState(false);
  const { initials, name } = cvData.personal;

  if (failed) {
    return (
      <div
        className={`flex items-center justify-center bg-gradient-to-br from-teal-500 to-emerald-600 text-white font-display font-extrabold ${className}`}
        aria-label={name}
      >
        <span className="text-[2.75rem] md:text-6xl tracking-tight">{initials}</span>
      </div>
    );
  }

  return (
    <div className={`overflow-hidden ${className}`}>
      <img
        src={profilePhoto}
        alt={name}
        onError={() => setFailed(true)}
        className="w-full h-full object-cover"
        style={{ objectPosition: PHOTO_POSITION, transform: `scale(${PHOTO_ZOOM})` }}
      />
    </div>
  );
};

export default Avatar;
