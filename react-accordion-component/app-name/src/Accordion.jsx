import { useState } from 'react';
import './Accordion.css';

export default function Accordion({ topics }) {
  const [topicClickedIndex, setTopicClickedIndex] = useState(undefined);
  const accordion = topics.map((topic, index) => (
    <div key={index} className="topic">
      <div
        className="header"
        onClick={() =>
          topicClickedIndex === index
            ? setTopicClickedIndex(undefined)
            : setTopicClickedIndex(index)
        }>
        <Topic subject={topic.title} topicIndex={index} />
      </div>
      <div className="info">
        {topicClickedIndex === index && <Info info={topic.content} />}
      </div>
    </div>
  ));
  return <div className="container">{accordion}</div>;
}

function Topic({ subject }) {
  return <>{subject}</>;
}

function Info({ info }) {
  return <>{info}</>;
}
