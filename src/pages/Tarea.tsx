export default function Tarea() {
  return (
    <div className="h-screen bg-slate-900 px-20 py-10">
      <h1 className="font-cursiva text-8xl text-slate-400">Tarea</h1>
      <div>
        <ul>
          <a href="https://drive.google.com/drive/folders/1tSrcDq7PkxQ-wBY9jvEdkzaLbVrZu1BQ?usp=sharing">
            <li className="mt-2 rounded bg-slate-700 px-4 py-2 text-xl text-slate-400 sm:w-6/12">
              Tarea del dia: 15/05
            </li>
          </a>
          <a href="https://drive.google.com/drive/folders/1-088MYFDpZcKCrpij3cIGQem13c1C7WD">
            <li className="mt-2 rounded bg-slate-700 px-4 py-2 text-xl text-slate-400 sm:w-6/12">
              Tarea del dia: 16/05
            </li>
          </a>
        </ul>
      </div>
    </div>
  );
}
