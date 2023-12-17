import "./index.css";
import React, { useEffect } from "react";
import TextBlock from "../../components/TextBlock";
import { TextBlockType } from "../../components/TextBlock/TextBlock.types";
import background from "../../utils/background";
import transformer from "../../utils/transformer";

const textBlocks = [
  { type: TextBlockType.PLAIN_TEXT, readOnly: false },
  { type: TextBlockType.BASE64_URL, readOnly: false },
  { type: TextBlockType.HEX, readOnly: false },
  { type: TextBlockType.ROT13, readOnly: false },
  { type: TextBlockType.MD5, readOnly: true },
  { type: TextBlockType.SHA1, readOnly: true },
];

const App = () => {
  const [data, setData] = React.useState({} as Record<string, string>);

  const handleTextUpdate = async (type: TextBlockType, text: string) => {
    const data = await transformer.transform(type, text);
    setData(data);
  };

  useEffect(() => {
    background.init();
  });

  return (
    <div className="App">
      <header className="header">
        <span className="header-prefix">[n]</span>decode
      </header>
      <section className="container background-container">
        {textBlocks.map((block) => (
          <TextBlock
            key={block.type}
            type={block.type}
            value={data[block.type]}
            onChange={
              !block.readOnly
                ? handleTextUpdate.bind(this, block.type as TextBlockType)
                : undefined
            }
            readOnly={block.readOnly}
          />
        ))}
      </section>
    </div>
  );
};

export default App;
