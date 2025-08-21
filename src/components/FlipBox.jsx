import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";


/**
 * CurtainSection
 *
 * Usage:
 * <div style={{height: "100vh"}}>some content</div>
 * <div style={{height: "100vh"}}>some content</div>
 * <CurtainSection>Stage content here</CurtainSection>
 * <div style={{height: "100vh"}}>more content</div>
 *
 * The curtain effect is confined to this section (no fixed positioning).
 */
export default function CurtainSection({
  leftImg,
  rightImg,
  children,
  id = "curtain-section",
  height = "100vh",
  openDuration = 0.8, // seconds
}) {
  const sectionRef = useRef(null);

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
  
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
          const rect = entry.isIntersecting;
          const viewportHeight = window.scrollY;
          if(rect) {
            setIsOpen(true)
          }
          else {
            setIsOpen(false)
          }
      },
      { threshold: 0.9 }
    );
    observer.observe(el);
  }, [sectionRef.current]);

  const sectionStyle = {
    position: "relative",
    height,
    overflow: "hidden",
    background: "#111", 
  };

  const curtainCommon = {
    position: "absolute",
    top: 0,
    height: "100%",
    width: "50%",
    zIndex: 20,
    display: "block",
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    boxShadow: "inset 0 0 40px rgba(0,0,0,0.6)",
  };

  const stageContentStyle = {
    position: "relative",
    zIndex: 10,
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    padding: "2rem",
    textAlign: "center",
  };

  // motion targets
  const leftTarget = isOpen ? { x: "-100%" } : { x: "0%" };
  const rightTarget = isOpen ? { x: "100%" } : { x: "0%" };

  return (
    <section id={id} ref={sectionRef} style={sectionStyle}>
      <div style={{
        position: 'absolute',
        top: '0',
        left: '0',
        width: '100%',
        height: '100%',
        background: '#00000061',
        zIndex : '21'
      }} />
      {/* Left curtain (starts at left: 0) */}
      <motion.div
        aria-hidden="true"
        style={{
          ...curtainCommon,
          backgroundImage: `url(${leftImg})`,
          left: 0,
          transformOrigin: "left center",
        }}
        animate={leftTarget}
        initial={false}
        transition={{ duration: openDuration, ease: "easeInOut" }}
      />

      {/* Right curtain (starts at right: 0) */}
      <motion.div
        aria-hidden="true"
        style={{
          ...curtainCommon,
          backgroundImage: `url(${rightImg})`,
          right: 0,
          transformOrigin: "right center",
        }}
        animate={rightTarget}
        initial={false}
        transition={{ duration: openDuration, ease: "easeInOut" }}
      />

      {/* Stage content */}
      <div style={stageContentStyle}>{children ?? <DefaultStage />}</div>
    </section>
  );
}

// Simple default stage content if none provided
function DefaultStage() {
  return (
    <div>
      <h2 style={{ margin: 0, fontSize: 36 }}>🎭 Welcome to the Show</h2>
      <p style={{ opacity: 0.85, marginTop: 8 }}>
        Scroll into this section to open the curtains.
      </p>
    </div>
  );
}