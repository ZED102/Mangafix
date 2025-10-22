# Simple mock inpainting server
from flask import Flask, request, jsonify
from PIL import Image
import io, base64

app = Flask('mock_ai')

@app.route('/inpaint', methods=['POST'])
def inpaint():
    if 'image' not in request.files:
        return jsonify({'success': False, 'error': 'no image'})
    f = request.files['image']
    img = Image.open(f.stream).convert('RGBA')
    # mock: return the same image as base64 PNG
    buf = io.BytesIO()
    img.save(buf, format='PNG')
    b64 = base64.b64encode(buf.getvalue()).decode('utf-8')
    return jsonify({'success': True, 'image': 'data:image/png;base64,'+b64})

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8000)
