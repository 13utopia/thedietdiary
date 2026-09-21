import os
import re

ROOT_DIR = os.path.abspath(os.path.join(os.path.dirname(__file__), ".."))
PUBLIC_DIR = os.path.join(ROOT_DIR, "public")
LAYOUT_FILE = os.path.join(ROOT_DIR, "src", "app", "layout.jsx")

def get_all_css_files():
    css_files = []
    for root, dirs, files in os.walk(PUBLIC_DIR):
        for f in files:
            if f.endswith('.css'):
                full_path = os.path.join(root, f)
                rel_public = os.path.relpath(full_path, PUBLIC_DIR).replace(os.sep, '/')
                css_files.append('/' + rel_public)
    return sorted(css_files)

def get_all_js_files():
    js_files = []
    # Priority order for script loading
    priority = ['jquery.min.js', 'jquery-migrate.min.js', 'underscore.min.js', 'hooks.min.js', 'i18n.min.js', 'frontend-modules.min.js', 'webpack.runtime.min.js', 'frontend.min.js']
    
    for root, dirs, files in os.walk(PUBLIC_DIR):
        for f in files:
            if f.endswith('.js'):
                full_path = os.path.join(root, f)
                rel_public = os.path.relpath(full_path, PUBLIC_DIR).replace(os.sep, '/')
                js_files.append('/' + rel_public)

    def get_sort_key(path):
        fname = os.path.basename(path)
        if fname in priority:
            return (0, priority.index(fname))
        return (1, path)

    js_files.sort(key=get_sort_key)
    return js_files

def main():
    css_links = get_all_css_files()
    js_scripts = get_all_js_files()

    print(f"Loaded {len(css_links)} CSS files and {len(js_scripts)} JS files.")

    css_head_tags = "\n".join([f'        <link rel="stylesheet" href="{href}" />' for href in css_links])
    js_script_tags = "\n".join([f'        <Script src="{src}" strategy="lazyOnload" />' for src in js_scripts])

    layout_code = f"""import './globals.css';
import Script from 'next/script';
import SkipLink from '../components/SkipLink';

export const metadataBase = new URL('https://thedietdiary.in');

export const viewport = {{
  width: 'device-width',
  initialScale: 1,
}};

export const metadata = {{
  title: 'Shivangi Pancholi | Expert Nutritionist & Dietitian for a Healthier You',
  description: 'Shivangi Pancholi, a certified Nutritionist & Dietitian, helps you achieve your health goals with personalized diet plans and expert nutrition advice.',
  openGraph: {{
    title: 'Shivangi Pancholi | Expert Nutritionist & Dietitian',
    description: 'Personalized nutrition, gut health, and sustainable diet plans.',
    url: 'https://thedietdiary.in/',
    siteName: 'The Diet Diary',
    images: [
      {{
        url: '/website-images/Untitled-design-2024-08-05T125025_290.webp',
        width: 1150,
        height: 1500,
      }},
    ],
    locale: 'en_US',
    type: 'website',
  }},
}};

export default function RootLayout({{ children }}) {{
  return (
    <html lang="en">
      <head>
{css_head_tags}
      </head>
      <body>
        <SkipLink />
        <main id="main-content">{{children}}</main>
{js_script_tags}
      </body>
    </html>
  );
}}
"""

    with open(LAYOUT_FILE, 'w', encoding='utf-8') as f:
        f.write(layout_code)

    print("Updated RootLayout with all CSS and JS Script tags!")

if __name__ == '__main__':
    main()
