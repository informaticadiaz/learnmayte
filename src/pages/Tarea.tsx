import MainLayout from '../layout/MainLayout'

export default function Tarea() {
  
  
  return (
    <MainLayout>
    <div className='px-20 py-10 bg-slate-900 h-screen'>
        <h1 className='font-cursiva text-8xl text-slate-400'>Tarea</h1>
        <div>

        <ul>
          <li className='text-xl text-slate-400 px-4 py-2 mt-2 sm:w-6/12 rounded bg-slate-700'>
            <a
            href="https://drive.google.com/drive/folders/1tSrcDq7PkxQ-wBY9jvEdkzaLbVrZu1BQ?usp=sharing">
              Tarea del dia: 15/05
            </a>
          </li>
        </ul>
      
        </div>
      </div>
      </MainLayout>
  )
}