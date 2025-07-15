import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { uniqueId } from '@ember/helper';
import t from 'ember-intl/helpers/t';
import { on } from '@ember/modifier';
import LoadingSpinner from 'frontend/components/loading-spinner';

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
        console.info('File fake saved:', file);
      } catch (err) {
        console.error('File upload error', err);
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
    console.info(`fake saving '${file.name}' for 2 seconds...`);
    return new Promise((resolve) => setTimeout(resolve, 2000));
  }
  <template>
    {{#let (uniqueId) as |templateId|}}
      <div class="file-upload" ...attributes>
        <label for="file-input" class="upload-label">{{t "general.uploadYourFile"}}
          (<code>{{t "general.validFileTypes"}}</code>):</label>
        <input
          id="file-input-{{templateId}}"
          type="file"
          accept=".txt, .jpg, .jpeg, .png"
          {{on "change" this.handleFileUpload}}
        />

        {{#if this.isLoading}}
          <div class="spinner"><LoadingSpinner />{{t "general.uploading"}}</div>
        {{else if this.error}}
          <p class="error-message">{{this.error}}</p>
        {{else if this.fileName}}
          <p class="file-details">{{t "general.uploadedFilename"}}: {{this.fileName}}</p>
        {{/if}}
      </div>
    {{/let}}
  </template>
}
