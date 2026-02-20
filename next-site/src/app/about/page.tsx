import aboutData from "../../../content/pages/about.json";

export const metadata = {
  title: "About | Daito Design",
  description: "Learn about Daito Design - The leader in industrial UX and enterprise experience design, with 15+ years of expertise.",
};

export default function AboutPage() {
  return (
    <main className="about-page">
      {/* Hero Section */}
      <section className="page-hero">
        <div className="container">
          <div className="hero-content">
            <span className="eyebrow hero-eyebrow" data-tina-field="hero.eyebrow">
              {aboutData.hero.eyebrow}
            </span>
            <h1 className="hero-title" data-tina-field="hero.headline">
              {aboutData.hero.headline}
            </h1>
            <p className="hero-subtitle" data-tina-field="hero.subtitle">
              {aboutData.hero.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section section-xl">
        <div className="container">
          <div className="story-content">
            <div className="story-text">
              <span className="eyebrow" data-tina-field="story.heading">
                {aboutData.story.heading}
              </span>
              <h2 className="text-title" data-tina-field="story.subheading">
                {aboutData.story.subheading}
              </h2>
              {aboutData.story.paragraphs.map((paragraph: string, index: number) => (
                <p
                  key={index}
                  className="text-body text-charcoal-soft mb-6"
                  data-tina-field={`story.paragraphs.${index}`}
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section section-xl bg-charcoal" style={{ color: "var(--sand)" }}>
        <div className="container">
          <div className="text-center mb-16">
            <span className="eyebrow" style={{ color: "var(--oxblood-light)" }} data-tina-field="values.heading">
              {aboutData.values.heading}
            </span>
            <h2 className="text-title" style={{ color: "var(--white)" }} data-tina-field="values.heading">
              {aboutData.values.heading}
            </h2>
          </div>

          <div className="grid grid-3" style={{ gap: "var(--space-1)" }}>
            {aboutData.values.cards.map((card: any, index: number) => (
              <div
                key={index}
                style={{
                  padding: "var(--space-10)",
                  background: "var(--charcoal-light)",
                }}
                data-tina-field={`values.cards.${index}`}
              >
                <h3
                  style={{
                    fontSize: "var(--text-xl)",
                    color: "var(--white)",
                    marginBottom: "var(--space-4)",
                  }}
                  data-tina-field={`values.cards.${index}.title`}
                >
                  {card.title}
                </h3>
                <p
                  style={{
                    color: "var(--charcoal-soft)",
                    fontSize: "var(--text-sm)",
                  }}
                  data-tina-field={`values.cards.${index}.description`}
                >
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Presence / Locations Section */}
      <section className="section section-xl">
        <div className="container">
          <div className="text-center mb-16">
            <span className="eyebrow" data-tina-field="global_presence.heading">
              {aboutData.global_presence.heading}
            </span>
            <h2 className="text-title" data-tina-field="global_presence.heading">
              {aboutData.global_presence.heading}
            </h2>
            <p className="text-body-lg text-charcoal-soft max-w-50ch mx-auto" data-tina-field="global_presence.intro">
              {aboutData.global_presence.intro}
            </p>
          </div>

          <div
            className="grid"
            style={{
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "var(--space-6)",
              textAlign: "center",
            }}
          >
            {aboutData.global_presence.locations.map((location: any, index: number) => (
              <div
                key={index}
                style={{ padding: "var(--space-6)" }}
                data-tina-field={`global_presence.locations.${index}`}
              >
                <h4
                  style={{ fontSize: "var(--text-xl)", marginBottom: "var(--space-2)" }}
                  data-tina-field={`global_presence.locations.${index}.city`}
                >
                  {location.city}
                </h4>
                <p
                  style={{
                    fontSize: "var(--text-sm)",
                    color: "var(--oxblood)",
                    fontWeight: "500",
                  }}
                  data-tina-field={`global_presence.locations.${index}.type`}
                >
                  {location.type}
                </p>
                <p
                  style={{
                    fontSize: "var(--text-xs)",
                    color: "var(--charcoal-medium)",
                    marginTop: "var(--space-2)",
                  }}
                  data-tina-field={`global_presence.locations.${index}.description`}
                >
                  {location.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="section section-xl bg-sand-light">
        <div className="container">
          <div className="text-center mb-16">
            <span className="eyebrow" data-tina-field="expertise.heading">
              {aboutData.expertise.heading}
            </span>
            <h2 className="text-title" data-tina-field="expertise.heading">
              {aboutData.expertise.heading}
            </h2>
          </div>

          <div className="grid grid-2" style={{ gap: "var(--space-6)" }}>
            {aboutData.expertise.cards.map((card: any, index: number) => (
              <div
                key={index}
                style={{
                  padding: "var(--space-6)",
                  background: "var(--white)",
                }}
                data-tina-field={`expertise.cards.${index}`}
              >
                <h3
                  style={{
                    fontSize: "var(--text-lg)",
                    marginBottom: "var(--space-2)",
                  }}
                  data-tina-field={`expertise.cards.${index}.title`}
                >
                  {card.title}
                </h3>
                <p
                  style={{
                    fontSize: "var(--text-sm)",
                    color: "var(--charcoal-soft)",
                  }}
                  data-tina-field={`expertise.cards.${index}.description`}
                >
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section section-xl">
        <div className="container">
          <div className="text-center mb-16">
            <span className="eyebrow" data-tina-field="team.heading">
              {aboutData.team.heading}
            </span>
            <h2 className="text-title" data-tina-field="team.heading">
              {aboutData.team.heading}
            </h2>
            <p className="text-body-lg text-charcoal-soft max-w-50ch mx-auto" data-tina-field="team.subtitle">
              {aboutData.team.subtitle}
            </p>
          </div>

          <div className="team-grid">
            {aboutData.team.members.map((member: any, index: number) => (
              <div
                key={index}
                className="team-card"
                data-tina-field={`team.members.${index}`}
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="team-card-image"
                  data-tina-field={`team.members.${index}.image`}
                />
                <h3
                  className="team-card-name"
                  data-tina-field={`team.members.${index}.name`}
                >
                  {member.name}
                </h3>
                <p
                  className="eyebrow team-card-title"
                  data-tina-field={`team.members.${index}.title`}
                >
                  {member.title}
                </p>
                <p
                  className="team-card-bio"
                  data-tina-field={`team.members.${index}.bio`}
                >
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section section-xl bg-oxblood" style={{ color: "var(--white)" }}>
        <div className="container text-center">
          <h2
            className="text-display"
            style={{ color: "var(--white)", marginBottom: "var(--space-8)" }}
            data-tina-field="cta.heading"
          >
            {aboutData.cta.heading}
          </h2>
          <p
            className="text-body-lg max-w-50ch mx-auto mb-12"
            style={{ color: "rgba(255,255,255,0.8)" }}
            data-tina-field="cta.body"
          >
            {aboutData.cta.body}
          </p>
          <a
            href="/contact"
            className="btn btn-lg"
            style={{ background: "var(--white)", color: "var(--oxblood)" }}
            data-tina-field="cta.button_text"
          >
            {aboutData.cta.button_text}
          </a>
        </div>
      </section>
    </main>
  );
}
