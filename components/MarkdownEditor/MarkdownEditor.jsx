import { useState } from "react";

import ReactMde from "react-mde";
import * as Showdown from "showdown";
import "react-mde/lib/styles/css/react-mde-all.css";

const converter = new Showdown.Converter({
  tables: true,
  simplifiedAutoLink: true,
  strikethrough: true,
  tasklists: true
});

const MarkdownEditor = ({ data, setFormData}) => {

    const [value, setValue] = useState(data);
    const [selectedTab, setSelectedTab] = useState("write");

    const setMarkdownValue = value => {
      setValue(value)
      setFormData((prevData) => ({...prevData, body: value}))
    }

    return (
        <ReactMde
          value={value}
          onChange={(value) => setMarkdownValue(value)}
          selectedTab={selectedTab}
          onTabChange={setSelectedTab}
          generateMarkdownPreview={markdown =>
            Promise.resolve(converter.makeHtml(markdown))
          }
        />
    );
}

export default MarkdownEditor;
  

