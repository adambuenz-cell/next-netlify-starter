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
          <h2>A Case Study Of 74 AI Specialists Minimizing AI Fatigue</h2>
        </section>

        {/* Abstract Section */}
        <section style={{ marginTop: '20px' }}>
          <h2>Abstract</h2>
          <p>
AI systems designed to combat user fatigue present a transformative opportunity to enhance workplace productivity and well-being. Traditional solutions often fail due to engagement and adherence challenges, but AI-powered interventions can dynamically adapt to user needs, embedding fatigue-reduction strategies seamlessly into workflows. These systems aim to address cognitive and physical fatigue, improving focus, performance, and overall workplace satisfaction.
To inform the development of fatigue-proof AI systems, we conducted a four-week study with 74 participants, analyzing how intervention types and delivery timing influence usage, fatigue reduction, and user satisfaction. The study compared two types of AI fatigue-reduction strategies delivered in two ways: User-Scheduled (US), where participants predetermined timing, and Adaptive Delivery (AD), where the AI system dynamically adjusted timing based on real-time AI fatigue detection.
Results showed that AD participants engaged with interventions more frequently than US participants, demonstrating the effectiveness of adaptive, context-aware systems. However, overall fatigue reduction remained similar across both delivery methods. Participants favored low-effort interventions for ease of use but reported that high-effort strategies provided greater relief from fatigue. While AD delivery was appreciated for its proactive approach, participants expressed a desire for some control over intervention timing.
These findings highlight the importance of balancing AI automation with user autonomy. By tailoring intervention types and timing to user preferences and real-time conditions, fatigue-proof AI systems can better support sustained focus, reduced burnout, and improved workplace experiences.
          </p>

          </p>
        </section>

      
      </main>

    </div>
  );
}
