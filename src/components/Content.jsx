export default function Content({ content }) {
  const paragraphs = content.split("\n")

  return <section>

    { paragraphs.map((para) => <p key={para}>{ para }</p>) }

  </section>
}