import Reader from './classes/Reader';

const reader = new Reader()
const input = document.querySelector('input[type="file"]') as HTMLInputElement
input.addEventListener('change', (ev:Event) => {
  const target = ev.target as HTMLInputElement
  const file = (target.files as FileList)[0]
  reader.readFile(file)
})