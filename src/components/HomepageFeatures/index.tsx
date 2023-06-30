import clsx from "clsx";
import React from "react";
import styles from "./styles.module.css";

type FeatureItem = {
  title: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: "⏰ 사랑하는 팀원의 시간을 낭비시키지 말아요",
    description: (
      <>
        지각하지 말아요.
        <br />
        시작 시간과 끝 시간을 명확히 해요.
      </>
    ),
  },
  {
    title: "📖 지식 공유의 가치를 믿어요",
    description: (
      <>
        어떤 질문도 괜찮아요.
        <br />
        새로 얻은 지식은 공유를 해요.
        <br />
        팀 블로그를 적극적으로 작성해요.
        <br />
        필요한 경우 팀원에게 지식 공유 요청을 해요.
      </>
    ),
  },
  {
    title: "😴 휴식이 필요하다는 것을 명심해요",
    description: (
      <>
        졸지 말고 자요. 너무 많이는 말고요. 😉
        <br />
        18시 이후의 시간을 보장해요.
        <br />
        회의중 잠시 쉬는 시간을 가지는 멈춰!권을 보장해요.
      </>
    ),
  },
  {
    title: "📋 건강한 회의를 지향해요.",
    description: (
      <>
        회의할 때는 경어를 사용해요.
        <br />
        서로의 무드를 맞추기 위해 BGM을 틀어요.
        <br />
        근거 있는 주장, 열려 있는 토론을 해요.
      </>
    ),
  },
  {
    title: "🤗 우리는 🌈🦄❤️🌸 친해요^^",
    description: (
      <>
        매일 아침 잡담 후 스크럼을 진행해요.
        <br />
        화요일마다 같이 점심을 먹어요.
        <br />
        금요일 5시에는 주간 회고를 진행해요.
      </>
    ),
  },
  {
    title: "🌈 따봉리오야 고마워 👍",
    description: (
      <>
        서로 존중하고 감사해요.
        <br />
        적극적으로 칭찬해요.
        <br />
        좋은데요?를 많이 사용해요.
      </>
    ),
  },
];

function Feature({ title, description }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--left padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <br/>
      <br/>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
