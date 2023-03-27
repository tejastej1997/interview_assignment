import "./styles.css";
import { explorer } from "../src/data/folderData";
export default function App() {
  let data = explorer.items;

  return (
    <div>
      {data.map((info) => {
        return (
          <div>
            <div>{info.name}</div>
            <div>
              {info.items?.map((idata) => {
                return idata.name;
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}
