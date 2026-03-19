import { useState } from "react";

export default function () {
  const question: string[] = ["one", "two", "three", "four"];
  const answer: string[] = ["ans1", "ans2", "ans3", "ans4"];
  const [progress, setProgress] = useState<number>(0);
  const [curpage, setCurpage] = useState<number>(0);
  const [allpage, setAllpage] = useState<number>(question.length - 1);
  const [answertoggle, setAnswertoggle] = useState<boolean>(false);

  function calculateprogress(page: number) {
    const barpercent = Math.round((page / allpage) * 100);
    setProgress(barpercent);
  }

  function next() {
    const newpage = curpage + 1;

    if (newpage > allpage) {
      return;
    } else {
      setCurpage(newpage);
      console.log(newpage);
      calculateprogress(newpage);
      setAnswertoggle(false);
    }
  }
  function prev() {
    const newpage = curpage - 1;

    if (newpage < 0) {
      return;
    } else {
      setCurpage(newpage);
      calculateprogress(newpage);
      setAnswertoggle(false);
    }
  }

  return (
    <div className="wrapper">
      <div className="bar">
        <div className="progressinfo">
          <p>{progress}%</p>
          <p>
            {curpage} of {allpage}
          </p>
        </div>
        <div className="progress" style={{ width: `${progress}%` }}></div>
      </div>
      <div className="border">
        <div
          className="ansborder center"
          style={{
            height: "80%",
            backgroundColor: answertoggle ? "white" : "rgb(255 255 255 / 15%)",
          }}
        >
          <p style={{ color: `${answertoggle ? "black" : "white"}` }}>
            {answertoggle ? `${answer[curpage]}` : `${question[curpage]}`}
          </p>
        </div>
        <div className="ansborder spread" style={{ height: `20%` }}>
          <div style={{ height: `100%`, width: `100px` }}>
            <button className="togglebutton" onClick={prev}>
              Previous
            </button>
          </div>
          <div style={{ height: `100%`, width: `200px` }}>
            <button
              className="togglebutton"
              onClick={() => setAnswertoggle(!answertoggle)}
            >
              {answertoggle ? "Hide Answer" : "Show Answer"}
            </button>
          </div>
          <div style={{ height: `100%`, width: `100px` }}>
            <button className="togglebutton" onClick={next}>
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
