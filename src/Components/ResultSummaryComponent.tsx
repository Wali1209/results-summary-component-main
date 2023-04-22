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
      <div>
        <img src={data[index].icon} alt="" />
        <span>{data[index].category}</span>
        <b>
          {data[index].score} <span>/100</span>
        </b>
      </div>
    );
  };

  return (
    <div>
      {/* // Result */}
      <div>
        <h3>Your Result</h3>
        <div>
          <h1>{calculateScore()}</h1>
          <span>of 100</span>
        </div>
        <h3>Great</h3>
        <p>
          You scored higher than 65% of the people who have taken these tests.
        </p>
      </div>

      {/* //Summary */}
      <div>
        <h3>Summary</h3>
        {summary(0)}
        {summary(1)}
        {summary(2)}
        {summary(3)}
      </div>

      {/* Continue Button */}
      <button>Continue</button>
    </div>
  );
}
