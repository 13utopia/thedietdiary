import os
import re

ROOT_DIR = os.path.abspath(os.path.join(os.path.dirname(__file__), ".."))

MOBILE_NAV_SCRIPT = """
<!-- Custom Vanilla JS Mobile Navigation Handler -->
<script>
document.addEventListener('DOMContentLoaded', function() {
    const menuToggleSelectors = '.menu-toggle, .hamburger, [data-toggle="menu"], .ast-mobile-menu-trigger-minimal, .ast-button-wrap, .main-header-menu-toggle';
    const mobileMenuSelectors = '.mobile-menu, .nav-menu, #site-navigation, .ast-mobile-popup-drawer, .main-navigation, .ast-mobile-header-content';
    
    const menuToggle = document.querySelector(menuToggleSelectors);
    const mobileMenu = document.querySelector(mobileMenuSelectors);
    
    if (menuToggle && mobileMenu) {
        menuToggle.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            mobileMenu.classList.toggle('active');
            menuToggle.classList.toggle('active');
            document.body.classList.toggle('menu-open');
        });
        
        mobileMenu.querySelectorAll('a').forEach(function(link) {
            link.addEventListener('click', function() {
                mobileMenu.classList.remove('active');
                menuToggle.classList.remove('active');
                document.body.classList.remove('menu-open');
            });
        });
        
        document.addEventListener('click', function(e) {
            if (!mobileMenu.contains(e.target) && !menuToggle.contains(e.target)) {
                mobileMenu.classList.remove('active');
                menuToggle.classList.remove('active');
                document.body.classList.remove('menu-open');
            }
        });
    }
});
</script>
"""

MOBILE_NAV_CSS = """
<style id="custom-mobile-nav-css">
/* Mobile Menu Toggle Styles */
@media (max-width: 1024px) {
    .nav-menu.active, .mobile-menu.active, .ast-mobile-popup-drawer.active, #site-navigation.active, .ast-mobile-header-content.active {
        display: block !important;
        visibility: visible !important;
        opacity: 1 !important;
        transform: translateX(0) !important;
    }
}
</style>
"""

def process_html_file(filepath):
    with open(filepath, 'r', encoding='utf-8', errors='ignore') as f:
        content = f.read()

    # Avoid duplicate injection
    if 'custom-mobile-nav-css' in content:
        return

    # Insert CSS before </head>
    if '</head>' in content:
        content = content.replace('</head>', f'{MOBILE_NAV_CSS}\n</head>')
    
    # Insert JS before </body>
    if '</body>' in content:
        content = content.replace('</body>', f'{MOBILE_NAV_SCRIPT}\n</body>')
    else:
        content += f'\n{MOBILE_NAV_SCRIPT}'

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)

def main():
    target_dirs = [ROOT_DIR]
    count = 0
    for root, dirs, files in os.walk(ROOT_DIR):
        if 'scripts' in root or 'wp-content' in root:
            continue
        for file in files:
            if file.endswith('.html'):
                path = os.path.join(root, file)
                process_html_file(path)
                count += 1
    print(f"Injected mobile navigation scripts into {count} site HTML pages.")

if __name__ == '__main__':
    main()
