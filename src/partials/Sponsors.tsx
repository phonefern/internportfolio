import { GradientText, Section } from 'astro-boilerplate-components';

const Sponsors = () => (
  <Section
    title={
      <>
        My <GradientText>8 Month </GradientText>Internship Journey
      </>
    }
  >
    <table className="mx-auto border-collapse">
      <tbody>
        <tr className="h-8">
          <td className="border-2 border-gray-300 p-3">
            <a target="_blank">
              <img
                src="/assets/images/journey-01.png"
                alt="journey1"
                width={260}
                height={224}
              />
            </a>
          </td>
          <td className="border-2 border-gray-300 p-3">
            <a target="_blank">
              <img
                src="/assets/images/journey-02.png"
                alt="journey2"
                width={260}
                height={224}
              />
            </a>
          </td>
          <td className="border-2 border-gray-300 p-3">
            <a target="_blank">
              <img
                src="/assets/images/journey-04.png"
                alt="journey3"
                width={260}
                height={224}
              />
            </a>
          </td>
        </tr>
        <tr className="h-8"></tr>
        <td className="border-2 border-gray-300 p-3">
          <a target="_blank">
            <img
              src="/assets/images/journey-06.png"
              alt="journey4"
              width={260}
              height={224}
            />
          </a>
        </td>
        <td className="border-2 border-gray-300 p-3">
          <a target="_blank">
            <img
              src="/assets/images/journey-03.png"
              alt="journey5"
              width={260}
              height={224}
            />
          </a>
        </td>
        <td className="border-2 border-gray-300 p-3">
          <a target="_blank">
            <img
              src="/assets/images/journey-05.jpg"
              alt="journey6"
              width={260}
              height={224}
            />
          </a>
        </td>
      </tbody>
    </table>
  </Section>
);

export { Sponsors };
