import style from "./style.module.css";
import { GetNewDate } from "../../../utils/GetNewDate";

type Props = {
  name: string;
  link: string;
  shorter: string;
  createAt: string | Date;
  onDelete: (id: string) => void;
};

export const Link = ({ name, link, shorter, createAt, onDelete }: Props) => {
  const date = new Date(createAt);
  const newShortUrl = `${import.meta.env.VITE_DB_URL}${shorter}`;

  const handleDelete = () => {
    onDelete(shorter);
  };

  return (
    <tr className={style.links__tr}>
      <td className={style.links__td}>{name}</td>
      <td className={style.links__td}>
        <a href={newShortUrl}>
          {import.meta.env.VITE_DB_URL}
          {shorter}
        </a>
      </td>
      <td className={style.links__td}>
        <a href={link}>{link}</a>
      </td>
      <td className={style.links__td}>
        <GetNewDate date={date} />
      </td>
      <td className={style.links__td}>
        <button aria-label="Eliminar" onClick={handleDelete}>
          <svg viewBox="0 0 20 20" fill="currentColor">
            <path
              fill-rule="evenodd"
              d="M8.75 1A2.75 2.75 0 0 0 6 3.75v.443c-.795.077-1.584.176-2.365.298a.75.75 0 1 0 .23 1.482l.149-.022.841 10.518A2.75 2.75 0 0 0 7.596 19h4.807a2.75 2.75 0 0 0 2.742-2.53l.841-10.52.149.023a.75.75 0 0 0 .23-1.482A41.03 41.03 0 0 0 14 4.193V3.75A2.75 2.75 0 0 0 11.25 1h-2.5ZM10 4c.84 0 1.673.025 2.5.075V3.75c0-.69-.56-1.25-1.25-1.25h-2.5c-.69 0-1.25.56-1.25 1.25v.325C8.327 4.025 9.16 4 10 4ZM8.58 7.72a.75.75 0 0 0-1.5.06l.3 7.5a.75.75 0 1 0 1.5-.06l-.3-7.5Zm4.34.06a.75.75 0 1 0-1.5-.06l-.3 7.5a.75.75 0 1 0 1.5.06l.3-7.5Z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
      </td>
    </tr>
  );
};
