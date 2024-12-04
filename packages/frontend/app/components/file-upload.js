import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class FileUploadComponent extends Component {
  @tracked fileName = null;
  @tracked error = null;
  @tracked isLoading = false; // Tracks loading state

  @action
  async handleFileUpload(event) {
    this.error = null; // Clear previous errors
    this.fileName = null; // Clear previous file name
    this.isLoading = true; // Show loading spinner

    const file = event.target.files[0];

    if (file) {
      const validTypes = ['text/plain', 'image/jpeg', 'image/png'];

      if (!validTypes.includes(file.type)) {
        this.isLoading = false; // Hide loading spinner on error
        this.error = `Invalid file type: ${file.type}. Please upload a .txt, .jpg, or .png file.`;
        return;
      }

      // Simulate file processing (e.g., saving to a temporary location)
      try {
        await this.simulateFileSave(file);
        this.fileName = file.name;
        console.log('File fake saved:', file);
      } catch (err) {
        this.error = 'An error occurred while uploading the file.';
      } finally {
        this.isLoading = false; // Hide loading spinner after processing
      }
    } else {
      this.isLoading = false; // Hide loading spinner if no file selected
      this.error = 'No file selected. Please upload a valid file.';
    }
  }

  async simulateFileSave(file) {
    // Simulates a delay for file saving (e.g., upload to server or temporary storage)
    console.log(`fake saving '${file.name}' for 2 seconds...`);
    return new Promise((resolve) => setTimeout(resolve, 2000));
  }
}
