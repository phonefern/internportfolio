import {
  ColorTags,
  GradientText,
  Project,
  Section,
  Tags,
} from 'astro-boilerplate-components';

const ProjectList = () => (
  <Section
    title={
      <>
        Recent <GradientText>Projects</GradientText>
      </>
    }
  >
    <div className="flex flex-col gap-6">
      <Project
        name="Mediguide Suggestion"
        description="โปรเจ็คนี้ใช้เทคนิคการจำแนกประเภท (Classification Model) โดยวิเคราะห์อาการเบื้องต้นของผู้ป่วยและทำนายแผนกที่เหมาะสมสำหรับการรักษา 
        โมเดลนี้ช่วยเพิ่มความแม่นยำในการวินิจฉัยเบื้องต้น และช่วยลดเวลาในการตัดสินใจในโรงพยาบาล"
        link="https://mediguide-f5f60.web.app/"
        img={{
          src: '/assets/images/project-web-design.png',
          alt: 'Project Web Design',
        }}
        category={
          <>
            <Tags color={ColorTags.FUCHSIA}>node.js</Tags>
            <Tags color={ColorTags.LIME}>Ai & Classification Model</Tags>
            <Tags color={ColorTags.ROSE}>JavaScript</Tags>
            <Tags color={ColorTags.INDIGO}>Application</Tags>
            <Tags color={ColorTags.EMERALD}>Electron</Tags>
          </>
        }
      />
      <Project
        name="Askmedi Chatbot"
        description="แชทบอทที่ผมพัฒนานี้เป็น Large Language Model (LLM) ที่ผ่านการปรับแต่งด้วย Google AI Studio
         จากข้อมูลแพ็คเกจการรักษาสำหรับให้แผนก Customer Service และ Marketing แนะนำแพ็คเกจและตอบคำถามทั่วไปการรักษาที่เหมาะสมแก่ผู้ป่วย"
        link="https://bhchat-v1.web.app/"
        img={{ src: '/assets/images/project-fire.png', alt: 'Project Fire' }}
        category={
          <>
            <Tags color={ColorTags.FUCHSIA}>node.js</Tags>
            <Tags color={ColorTags.LIME}>Ai & Large Language Model </Tags>
            <Tags color={ColorTags.ROSE}>JavaScript</Tags>
            <Tags color={ColorTags.INDIGO}>Web Application</Tags>
            <Tags color={ColorTags.EMERALD}>Firebase</Tags>
          </>
        }
      />
      <Project
        name="Csi Alert bot"
        description="โมเดลนี้ถูกออกแบบเพื่อวิเคราะห์ข้อความจากผู้ป่วยและแยกประเภทความรู้สึก (Sentiment) 
        เช่น ข้อความเชิงลบที่แสดงถึงความไม่พึงพอใจหรือความกังวล จากนั้นส่งแจ้งเตือนผ่าน LINE เพื่อให้สามารถปรับปรุงการรักษาในโรงพยาบาลได้"
        link="https://huggingface.co/spaces/SandboxBhh/csi-api-ui"
        img={{ src: '/assets/images/project-maps.png', alt: 'Project Maps' }}
        category={
          <>
            <Tags color={ColorTags.FUCHSIA}>FastAPI</Tags>
            <Tags color={ColorTags.INDIGO}>Pytorch</Tags>
            <Tags color={ColorTags.ROSE}>Python</Tags>
            <Tags color={ColorTags.EMERALD}>HuggingFace</Tags>
            <Tags color={ColorTags.INDIGO}>Docker</Tags>
          </>
        }
      />
    </div>
  </Section>
);

export { ProjectList };
