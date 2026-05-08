import streamlit as st
import streamlit.components.v1 as components
import os
import base64

st.set_page_config(layout="wide", page_title="Portfolio Preview")

base_dir = os.path.dirname(__file__)
html_file_path = os.path.join(base_dir, "index.html")
css_file_path = os.path.join(base_dir, "style.css")

def get_base64_image(image_path):
    try:
        with open(image_path, "rb") as img_file:
            return base64.b64encode(img_file.read()).decode()
    except Exception:
        return ""

try:
    with open(html_file_path, "r", encoding="utf-8") as f:
        html_content = f.read()
        
    with open(css_file_path, "r", encoding="utf-8") as f:
        css_content = f.read()
        
    # CSS 주입
    html_content = html_content.replace('<link rel="stylesheet" href="style.css">', f'<style>{css_content}</style>')
    
    # 이미지 Base64 주입
    img1_path = os.path.join(base_dir, "assets", "project1.png")
    img2_path = os.path.join(base_dir, "assets", "project2.png")
    
    img1_b64 = get_base64_image(img1_path)
    img2_b64 = get_base64_image(img2_path)
    
    if img1_b64:
        html_content = html_content.replace('src="assets/project1.png"', f'src="data:image/png;base64,{img1_b64}"')
    if img2_b64:
        html_content = html_content.replace('src="assets/project2.png"', f'src="data:image/png;base64,{img2_b64}"')
    
    st.title("Streamlit 미리보기 뷰어")
    st.write("아래는 작성하신 HTML 포트폴리오 화면입니다.")
    
    # HTML 렌더링
    components.html(html_content, height=1200, scrolling=True)
except FileNotFoundError as e:
    st.error(f"파일을 찾을 수 없습니다: {e}")
