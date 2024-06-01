import unittest
import os
from app import create_app

class TestNHLReportingApp(unittest.TestCase):
    def setUp(self):
        self.app = create_app()
        self.app.testing = True
        self.client = self.app.test_client()

    def test_home_page_exists(self):
        # Create a dummy 'index.html' file in the static folder for testing
        os.makedirs(self.app.static_folder, exist_ok=True)
        with open(os.path.join(self.app.static_folder, 'index.html'), 'w') as f:
            f.write('<!DOCTYPE html><html><head><title>Home</title></head><body>Home Page</body></html>')

        response = self.client.get('/')
        self.assertEqual(response.status_code, 200)
        self.assertIn(b'<!DOCTYPE html>', response.data)

    def test_app_is_live(self):
        response = self.client.get('/')
        self.assertEqual(response.status_code, 200)

    def tearDown(self):
        # Clean up the dummy 'index.html' file
        if os.path.exists(os.path.join(self.app.static_folder, 'index.html')):
            os.remove(os.path.join(self.app.static_folder, 'index.html'))

if __name__ == '__main__':
    unittest.main()
