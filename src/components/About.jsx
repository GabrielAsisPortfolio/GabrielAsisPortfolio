import Section from "./Section"

const About = () => {
  return (
    <Section bottomLine={true}>
      <div className="container py-8">
        <h1 className="font-roboto font-bold text-3xl">
          About- <span className="italic">get to know me</span>
        </h1>
      </div>
    </Section>
  )
}

export default About