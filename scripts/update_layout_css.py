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

def main():
    css_links = get_all_css_files()
    print(f"Found {len(css_links)} CSS stylesheets in public folder.")

    css_head_tags = "\n".join([f'        <link rel="stylesheet" href="{href}" />' for href in css_links])

    layout_code = f"""import './globals.css';
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
      </body>
    </html>
  );
}}
"""

    with open(LAYOUT_FILE, 'w', encoding='utf-8') as f:
        f.write(layout_code)

    print("Updated src/app/layout.jsx with all original CSS stylesheets!")

if __name__ == '__main__':
    main()
