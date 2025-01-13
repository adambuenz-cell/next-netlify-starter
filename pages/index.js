import Head from 'next/head';
import Header from '@components/Header';
import Footer from '@components/Footer';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Designing Fatigue Proof AI Systems</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
        {/* Title Section */}
        <section>
          <h1>Designing Fatigue Proof AI Systems</h1>
        </section>

        {/* Abstract Section */}
        <section style={{ marginTop: '20px' }}>
          <h2>Abstract</h2>
          <p>
            Insert your abstract here. This section should summarize the key
            findings and purpose of the research article in a concise manner.
          </p>
        </section>

        {/* Body Sections */}
        <section style={{ marginTop: '20px' }}>
          <h2>Introduction</h2>
          <p>
            Insert your introduction here. Provide an overview of the topic and
            outline the research objectives.
          </p>
        </section>

        <section style={{ marginTop: '20px' }}>
          <h2>Methods</h2>
          <p>
            Describe the research methods used in this study. Include details
            on the design, participants, and procedures.
          </p>
        </section>

        <section style={{ marginTop: '20px' }}>
          <h2>Results</h2>
          <p>
            Present the results of your study here. Use tables, charts, or
            bullet points to organize data if needed.
          </p>
        </section>

        <section style={{ marginTop: '20px' }}>
          <h2>Discussion</h2>
          <p>
            Discuss the implications of your findings, how they contribute to
            the field, and potential limitations of the study.
          </p>
        </section>

        <section style={{ marginTop: '20px' }}>
          <h2>Conclusion</h2>
          <p>
            Summarize the key takeaways and suggest future directions for
            research.
          </p>
        </section>

        <section style={{ marginTop: '20px' }}>
          <h2>References</h2>
          <p>Include your references here in the appropriate format.</p>
        </section>
      </main>

      <Footer />
    </div>
  );
}
