# Инструкция по деплою на GitHub Pages

## Быстрый старт

1. **Убедитесь, что ассеты скопированы:**
   ```bash
   npm run copy-assets
   ```
   Это скопирует изображения из `/home/d371l/Desktop/assets/` в `public/assets/`

2. **Создайте package-lock.json (если его нет):**
   ```bash
   npm install
   ```

3. **Создайте репозиторий на GitHub:**
   - Название: `orlysitbon` (или любое другое)
   - Публичный репозиторий

4. **Инициализируйте git и загрузите код:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/orlysitbon.git
   git push -u origin main
   ```
   
   **Важно:** Убедитесь, что папка `public/assets/` с изображениями добавлена в git!

3. **Включите GitHub Pages:**
   - Перейдите в Settings → Pages вашего репозитория
   - В разделе "Source" выберите **"GitHub Actions"**
   - Сохраните изменения

4. **После пуша в `main`:**
   - GitHub Actions автоматически запустится
   - Сборка займет 2-3 минуты
   - Сайт будет доступен по адресу: `https://YOUR_USERNAME.github.io/orlysitbon/`

## Важно!

Если имя вашего репозитория НЕ `orlysitbon`, измените в файле `.github/workflows/deploy.yml`:

```yaml
GITHUB_PAGES_BASE: /YOUR_REPO_NAME/
```

## Для кастомного домена

Когда будете готовы подключить кастомный домен:

1. Измените в `.github/workflows/deploy.yml`:
   ```yaml
   GITHUB_PAGES_BASE: /
   ```

2. В Settings → Pages добавьте ваш домен

3. Настройте DNS записи согласно инструкциям GitHub

## Проверка локальной сборки

Перед деплоем можно проверить сборку локально:

```bash
npm run build
npm run preview
```

Откройте `http://localhost:4173` чтобы увидеть собранную версию.

