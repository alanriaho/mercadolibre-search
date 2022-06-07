import { nanoid } from "nanoid";
import "./Breadcrumbs.scss";

const Breadcrumbs = ({ sections }) => sections.length ? (
  <div className="breadcrumbs">
    <ul>
      <li>{sections[0]} {"> "}</li>
      {sections.slice(1).map((section, index, arr) => index === (arr.length - 1) ? (
          <li key={nanoid()} className="last">{section}</li>
        ) : (
          <li key={nanoid()}>{`${section} > `}</li>
        )
      )}
    </ul>
  </div>
) : null;

export default Breadcrumbs;