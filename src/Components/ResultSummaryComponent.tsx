import { Container } from "./Styles/Container.styled";
import { Section1 } from "./Styles/ResultSummaryComponent.styled";
import { Section2 } from "./Styles/ResultSummaryComponent.styled";
import { SummaryList } from "./Styles/ResultSummaryComponent.styled";

import data from "../../data.json";
export function ResultSummaryComponent() {
  const calculateScore = () => {
    let score: number = 0;
    for (let i = 0; i < data.length; i++) {
      score += data[i].score;
    }
    return Math.round(score / data.length);
  };

  const summary = (index: number) => {
    return (
      <>
        <img src={data[index].icon} alt="" />
        <span>{data[index].category}</span>
        <b>
          {data[index].score} <span>/100</span>
        </b>
      </>
    );
  };

  return (
    <Container>
      <div>
        <Section1>
          {/* // Result */}
          <h3>Your Result</h3>
          <div>
            <h1>{calculateScore()}</h1>
            <span>of 100</span>
          </div>
          <h3>Great</h3>
          <p>
            You scored higher than 65% of the people who have taken these tests.
          </p>
        </Section1>

        <Section2>
          {/* //Summary */}
          <h3>Summary</h3>
          <div>
            <SummaryList color="hsl(0, 100%, 67%)">{summary(0)}</SummaryList>
            <SummaryList color="hsl(39, 100%, 56%)">{summary(1)}</SummaryList>
            <SummaryList color="hsl(166, 100%, 37%)">{summary(2)}</SummaryList>
            <SummaryList color="hsl(234, 85%, 45%)">{summary(3)}</SummaryList>

            {/* Continue Button */}
            <button>Continue</button>
          </div>
        </Section2>
      </div>
    </Container>
  );
}
