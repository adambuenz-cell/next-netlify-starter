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

      <main style={{ display: 'flex', justifyContent: 'center', padding: '20px', fontFamily: 'Arial, sans-serif' }}>
        <div style={{ maxWidth: '800px', textAlign: 'center', width: '100%' }}>
          {/* Title Section */}
          <section>
            <h1>Designing Fatigue Proof AI Systems</h1>
            <h2>A Case Study Of 74 AI Specialists Minimizing AI Fatigue</h2>
          </section>

          {/* Abstract Section */}
          <section style={{ marginTop: '20px', textAlign: 'left' }}>
            <h2>Abstract</h2>
            <p>
             AI Fatigue is a pervasive and costly issue, with many professionals experiencing its effects daily. Workplace
              AI fatigue contributes to decreased cognitive and physical performance, reduced productivity due to errors and
              burnout, diminished job satisfaction, and increased incidents of fatigue-related accidents. These impacts
              often extend beyond the workplace, disrupting overall well-being and personal lives. To address workplace
              AI fatigue, strategies such as organizational adjustments, individual AI fatigue management training, and
              technology-driven interventions have been explored. Individual approaches, such as structured breaks,
              mindfulness exercises, and physical activity, have proven effective in mitigating AI fatigue and improving
              overall outcomes. However, these methods are often difficult to integrate into daily workflows, leading to
              inconsistent use and limited long-term benefits.
            </p>
          </section>
  <section style={{ marginTop: '20px', textAlign: 'left' }}>
            <h2>AI Fatigue Study</h2>
            <p>
AI fatigue management systems offer a promising solution. By dynamically adapting to user needs and detecting fatigue in real time, these systems can deliver timely, personalized interventions. This approach not only enhances engagement but also addresses the barriers of traditional methods, providing a seamless way to support focus, energy, and well-being throughout the workday. Integrating individual fatigue management interventions into the workday can be challenging, particularly in workplace cultures with high task demands or environments where taking personal time for recovery is not supported. Even in supportive workplaces, the shift from understanding effective fatigue management strategies to applying them during moments of peak fatigue can be difficult, requiring both psychological readiness and actionable opportunities.
AI-powered solutions, such as fatigue management apps and systems, have gained popularity due to their accessibility and unobtrusive nature. These tools allow users to engage with interventions seamlessly, without disrupting their work environment or drawing attention. However, many available apps lack evidence-based designs, and even those that are rigorously studied face challenges with user attrition and inconsistent engagement. Promoting sustained interaction with fatigue-reduction tools over time is critical to achieving long-term benefits. AI-driven systems designed to adapt to individual needs in real time offer a promising path forward, addressing barriers to adherence while improving outcomes. By focusing on dynamic engagement and user-specific customization, such systems can enhance both the effectiveness and adoption of technology-delivered interventions.
Integrating AI fatigue management strategies into daily workflows presents unique challenges, particularly in high-demand workplaces or cultures that do not prioritize time for recovery. Even in supportive environments, leveraging AI tools to address moments of peak mental or physical fatigue requires seamless integration, psychological readiness, and effective timing. AI-powered fatigue management systems are gaining traction as practical solutions due to their ability to adapt in real time and integrate unobtrusively into work environments. These systems can monitor user behavior and deliver tailored interventions to mitigate fatigue without disrupting productivity. Despite their potential, many existing solutions struggle with issues such as inconsistent engagement, user attrition, and limited evidence-based design.
Sustained interaction with AI fatigue management tools is crucial for long-term effectiveness. Systems that dynamically respond to individual needs and work conditions offer a promising approach. By emphasizing adaptive delivery, real-time feedback, and personalization, AI-driven platforms can tackle fatigue proactively, ensuring consistent engagement and improved workplace well-being. In this study, we present a four-week, between-subjects study with 74 AI specialists to examine the impact of digital micro-intervention timing and content on usage patterns and AI fatigue mitigation throughout the workday. Our goal was to inform the design of effective and engaging fatigue management systems. Using a desktop application for passive data collection and a Teams chatbot for intervention delivery, we tested three categories of intervention content across two timing conditions: User-Scheduled (US) and Adaptive Delivery (AD), where the system dynamically adjusted based on passively-sensed and user-reported fatigue levels.

            </p>
          </section>                
        </div>
      </main>

      <Footer />
    </div>
  );
}
