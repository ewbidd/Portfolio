export default function SocialBar() {
  const socials = [
    { href: "https://www.linkedin.com/in/muhammad-abidillah-49a7282b7/", icon: "fab fa-linkedin", extraClass: "me-2" },
    { href: "https://github.com/ewbidd", icon: "fab fa-github", extraClass: "me-2" },
    { href: "https://www.instagram.com/ewbid/", icon: "fab fa-instagram", extraClass: "" },
  ];

  return (
    <div className="social-bar-sticky">
      {socials.map((s, i) => (
        <a
          key={i}
          href={s.href}
          className={`text-decoration-none fs-6 neon-icon-wrap ${s.extraClass}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className={`${s.icon} text-white neon-icon-base`}></i>
          <i className={`${s.icon} neon-icon-overlay`}></i>
        </a>
      ))}
    </div>
  );
}

