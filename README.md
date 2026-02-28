## ReadEase 

### Basic Details
**Team Name:** CodHers
## Team Members

**Team Member 1:** Anusree E S – Mar Athanasius College of Engineering (MACE)  
**Team Member 2:** Haripriya V P – Mar Athanasius College of Engineering (MACE)

## Hosted Project Link
[Add your hosted project link here]

## Project Description
ReadEase is a supportive reading application that converts text into speech while highlighting words in real-time for improved focus and comprehension.  
It is designed to assist users with reading difficulties, including dyslexia, by providing synchronized audio guidance and a calm, aesthetic reading environment.

## The Problem Statement
Many individuals struggle to maintain focus while reading digital text, especially those with dyslexia, other reading difficulties, attention challenges, or cognitive overload. Traditional reading interfaces do not provide synchronized audio guidance or visual tracking support, making comprehension and sustained attention harder.

## The Solution
ReadEase provides a text-to-speech reading environment that highlights words in real-time as they are spoken. By combining audio narration, visual focus tracking, adjustable speed control, and a calm user interface, the system helps users, including those with dyslexia, follow text more comfortably and improve reading engagement.
## Technical Details

### Technologies / Components Used

#### For Software:
- **Languages used:** HTML, CSS, JavaScript 
- **Frameworks used:** None (Vanilla JS and PHP-based backend)  
- **Libraries used:** None (built-in browser APIs, e.g., Web Speech API)  
- **Tools used:** VS Code, XAMPP / Local Server, Git  
## Features
Key features of ReadEase include:

- **Real-time Word Highlighting:** Words are highlighted as they are read aloud, helping users track text visually.  
- **Text-to-Speech Support:** Converts any entered text into clear audio narration for easier comprehension.  
- **Adjustable Reading Speed:** Users can control the speech rate to match their reading comfort level.  
- **Dyslexia-Friendly Interface:** A calm, aesthetic interface with synchronized audio-visual guidance designed to assist users with dyslexia and other reading difficulties.

## Implementation

### For Software

**Frontend:**
- HTML:
  - `<textarea>` for user input text
  - `<div id="outputBox">` for showing highlighted text
  - Buttons: Start, Pause, Resume
- CSS:
  - Pink & white aesthetic theme
  - Floating elements and soft background blobs
  - Glass effect cards for reading area
- JS:
  - `convertText()` — splits input into words and wraps them in `<span>` for highlighting
  - `startSpeech()` — creates `SpeechSynthesisUtterance` and starts speech
  - `startProgressHighlight()` — highlights words according to speech progress
  - `pauseSpeech()` and `resumeSpeech()` — pause/resume functionality
  - `estimateSpeechDuration()` — calculates text reading duration for sync
### Project Documentation
#### Screenshots

![Homepage](docs/homepage.png)
*The main screen of ReadEase showing the pink aesthetic homepage.*

![Reader Page](docs/reader_page.png)
*Shows text-to-speech with highlighted words for improved focus.*

![Settings](docs/settings.png)
*Speed control and customization options.*
*Speed control and customization options.*

**For Web Projects with Backend:**

_ReadEase does not use a backend server or API. All text-to-speech processing and word highlighting happen entirely in the user's browser using JavaScript and the Web Speech API._
### AI Tools Used (Optional - For Transparency Bonus)

**Tool Used:** ChatGPT  

**Purpose:**  
- Assisted in drafting code snippets for text-to-speech synchronization  
- Suggested CSS styling ideas for a calm, aesthetic reading interface  
- Provided guidance on JavaScript logic for word highlighting and speed control  

**Key Prompts Used:**  
- "Implement a text-to-speech function that highlights words in real-time"  
- "Create a visually aesthetic pink-themed homepage for a reading app"  
- "Write a resume and pause function for speech synthesis in JavaScript"  

**Percentage of AI-generated code:** Approximately 20% (mostly boilerplate and logic guidance)  

**Human Contributions:**  
- Architecture design and planning  
- Custom business logic implementation for text highlighting and speed control  
- Frontend UI/UX design decisions  
- Integration and testing of the speech synthesis functionality  

### Team Contributions

**Anusree E S:** Frontend development, text-to-speech implementation, CSS/JS design  
**Haripriya V P:** UI/UX design, project documentation, testing and debugging  


![Workflow](docs/workflow.png)  
*Workflow showing the user inputting text, the text-to-speech conversion process, real-time word highlighting, and user interaction with speed controls and pause/resume functionality.*
