export default function Home({ text }) {
  return <div>{text}</div>
}

export async function getStaticProps(_context) {
  return {
    props: {
      text: 'nextgogo'
    } // will be passed to the page component as props
  }
}
