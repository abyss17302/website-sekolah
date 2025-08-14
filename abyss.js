const body = document.body;
const btn = document.getElementById('theme-toggle');

// cek preferensi tersimpan
if (localStorage.theme === 'dark') {
  body.classList.add('dark');
  btn.textContent = '☀️';
}

// saat tombol diklik
btn.onclick = () => {
  body.classList.toggle('dark');
  const darkMode = body.classList.contains('dark');
  localStorage.theme = darkMode ? 'dark' : 'light';
  btn.textContent = darkMode ? '☀️' : '🌙';
};