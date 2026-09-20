# App Overview

This project is a desktop productivity app built with Electron, Vite, vanilla JavaScript, CSS, and CodeMirror. It started from a Notepad++-style local file editor, then grew into a multi-tool workspace for files, media, documents, personal planning, visual boards, and creative notes.

The app is designed around one main idea: keep local work in one place. A user can browse files, open and edit documents, convert media, manage tasks, collect diary books, track goals on visual maps, organize study/work files, and sketch with Excalidraw without leaving the desktop app.

## Core Shell

- Electron desktop wrapper with local filesystem access.
- Vite frontend bundle.
- Sidebar file explorer.
- App launcher section inside the sidebar.
- Multi-tab workspace for opened files and apps.
- Active tab switching.
- Dirty-state handling for editable files.
- Local file open and save dialogs.
- Directory picker.
- Home directory access.
- Local media protocol support through `local-media://`.
- System-safe file path rendering for images, videos, and selected local files.
- Context menus for files and folders.
- Quick access / favorite folder style launcher cards.
- Folder card customization with presets, custom image, color, and style choices.
- Sidebar and workspace visual customization options.
- Toast messages and confirmation/prompt dialogs.

## File Explorer

- Browse local directories.
- Open files from the sidebar.
- Open folders as gallery views.
- Sort and display folder entries.
- Context menu actions for files and folders.
- Open file with the system default app.
- Reveal/open paths in the OS file explorer.
- File icons and type-aware visual badges.
- Customized look of the File Explorer.
- Customizable folder art and file extension icons (with built-in packs like Fur plush and Hand Draw / Luna, plus custom image upload support).
- Custom icons for file extensions and app launcher desktop entries.
- Add files directly into Kanban boards from the file context menu.
- Create a new Kanban board from a selected file.

## Text And Code Editing

- CodeMirror-based editor.
- Syntax support for common code/text formats such as JavaScript, HTML, CSS, SQL, Markdown, JSON, CSV, and TSV.
- Multi-tab code editing.
- Save edited files.
- Large text file handling with safer display behavior.
- JSON-to-CSV conversion shortcut.
- CSV/TSV raw text editing mode.
- CSV/TSV table mode.
- CSV/TSV export and conversion actions.

## Spreadsheet And Data Tools

- CSV table viewer.
- TSV table viewer.
- XLS/XLSX spreadsheet opening.
- CSV-to-XLSX conversion.
- TSV-to-CSV conversion.
- CSV export to multiple formats.
- JSON-to-CSV conversion.
- Parquet viewing/conversion support.
- Large CSV conversion warning.
- LiteParse integration for parsing files.
- LiteParse OCR toggle.
- LiteParse result viewing.
- Export parsed matches to CSV.

## PDF Studio

- Open PDF files.
- PDF page rendering.
- Convert/export PDF pages to image formats.
- Export formats include PNG, JPEG, and WebP.
- Split PDF by page ranges.
- Organize PDF pages.
- Rotate PDF pages.
- Delete PDF pages.
- Merge multiple PDFs.
- Compress PDF.
- Open parsed PDF through LiteParse.
- Save generated PDF outputs.

## Image Studio

- Open common image formats.
- Image preview viewport.
- Crop mode.
- Apply/cancel crop.
- Reset crop.
- Save cropped image.
- Convert image format.
- Supported conversion targets include PNG, JPEG, WebP, BMP, ICO, SVG, and PDF.
- HEIC conversion support.
- Background removal workflow.
- Save background removal result.
- Revert background removal result.
- Canvas-based image processing.

## Media And Video

- Video player support through Video.js.
- Open local videos.
- YouTube embed/video support.
- Byte-range style local playback support through Electron file APIs.
- FFmpeg-backed processing.

## YouTube Studio

- Search YouTube from inside the app.
- YouTube search suggestions.
- View YouTube result cards.
- Select downloadable formats/quality.
- Download YouTube videos.
- Open YouTube videos in embedded player tabs.
- Track download progress/status.

## Kanban Board

- Dedicated Kanban Board app.
- Multiple Kanban boards/projects.
- Create new Kanban boards.
- Import Kanban cards from CSV.
- CSV import preview before adding cards.
- CSV import defaults to replacing the current board as a fresh template.
- CSV import can append to the existing board when selected.
- CSV import can map common fields such as title/task/name, column/status, description/notes, priority, due date, tags, checklist, subtasks, file paths, and URLs.
- CSV import creates missing target columns automatically.
- Delete boards.
- Rename boards.
- Board sidebar for switching projects.
- Fullscreen board view.
- Default columns such as To-Do, On Progress, and Done.
- Custom columns.
- Add columns.
- Rename columns through context menu.
- Delete columns.
- Pick column accent colors.
- Drag cards between columns.
- Smoother card movement transitions.
- Add new cards.
- Click a card to open a detail modal.
- Card title editing.
- Card description editing.
- Optional card priority.
- Priority colors for Low, Medium, and High.
- Card tags.
- Checklist items.
- Subtasks.
- Checklist and subtask status rendering on cards.
- Add/remove checklist items in modal.
- Add/remove subtasks in modal.
- Start date and due date fields.
- Minimal card timeline/progress bar when both start date and due date exist.
- Timeline bar represents elapsed time and shows remaining days.
- Attach multiple local files to a card.
- Attach multiple URL links to a card.
- File attachment rows show file type icon and filename.
- Long filenames can wrap.
- Open linked local files.
- Open linked URLs.
- Remove attachments from the card modal.
- Due date display.
- Date logic works across all columns, not only Done.
- Card file/link data stores paths and URLs, not file blobs.
- File context menu can add a file directly into an existing or new Kanban board.

## Notes

- Dedicated Notes app.
- BlockNote-powered block editor.
- Light themed writing surface.
- Multiple local notes.
- Card-based notes library instead of a plain sidebar.
- Filing-cabinet style folder sidebar for note categories.
- Create note folders.
- Rename note folders.
- Delete note folders and move their notes into another folder.
- Filter notes by folder.
- Move a note between folders from the editor.
- Each note card shows title, description/preview, and last updated date.
- Note cards have a pinned paper visual style.
- Note card preview text is clamped for consistent card sizing.
- Create new notes.
- New notes open directly into the BlockNote editor.
- Click a note card to open the BlockNote editor.
- Rename notes from the title field.
- Delete notes.
- Search notes from the library view.
- Search uses note title, folder, description metadata, and saved preview for scalable library scanning.
- Filter notes by the card date from the library view.
- Insert local images into the BlockNote document through the Electron file picker.
- Insert local videos into the BlockNote document through the Electron file picker.
- Insert local files/documents into the BlockNote document through the Electron file picker.
- Local note media stores file paths through `local-media://`, not blobs or base64.
- Supports rich block-based writing such as paragraphs, headings, lists, and checklist-style notes through BlockNote.
- Slash-command editing from BlockNote.
- Quiet autosave while typing.
- Persists the notes library locally.
- Saves note folders and note card metadata in a compact notes index.
- Saves full BlockNote document content separately per note in file-backed Electron storage, so editing one note does not rewrite every note body.
- Loads full note content only when the user opens that note.
- Automatically migrates older notes that stored content inside the main notes object.
- Uses a React mount inside the existing Electron/Vite workspace, similar to Excalidraw.

## Folder Forge

- Dedicated Folder Forge app.
- Converts a plain-text outline into a folder structure.
- Supports headings, bullet lists, indentation, numbered lines, and direct paths such as `src/components`.
- Uses 2 spaces per folder level, with Tab and Shift+Tab shortcuts for indent/outdent.
- Sanitizes invalid folder name characters before creation.
- Live preview as a nested tree.
- Alternate flat list preview.
- Example templates for data learning and web projects.
- Clear action for starting a fresh structure.
- Indent and outdent actions for selected lines.
- Pick a destination folder through the Electron directory picker.
- Copy the generated folder list.
- Create all folders on disk.
- Skips folders that already exist.
- Reports created, skipped, and failed folders.
- Stores the current draft locally.
- Stores the last destination folder locally.

## Canvaya

- Dedicated Canvaya app.
- Opens to a board library/gate instead of directly entering the canvas.
- Create multiple Canvaya boards.
- Board library shows compact glass board cards with title plus edit/delete actions.
- Board library supports list and grid views.
- Open a board by clicking its library card.
- Rename boards from the library card actions.
- Delete boards from the library card actions.
- Return to the board library from the canvas toolbar.
- React Flow-powered freeform whiteboard canvas.
- Add connected visual nodes on an infinite canvas.
- Supports note cards, checklist cards, image cards, link cards, table cards, file cards, board/group frames, text labels, and diagram shapes.
- Drag, pan, zoom, and connect elements.
- Canvas context menu for quick element creation.
- Top toolbar for adding cards and changing board modes.
- Color picker controls for node and edge styling.
- Font theme picker for board typography.
- Checklist cards include item progress behavior.
- Image and file nodes support local attachment-style workflows from the imported Canvaya app.
- Link nodes support bookmark-style notes.
- Table nodes support editable grid-style content.
- Shape nodes support multiple diagram shapes.
- Board data persists through Electron IPC using split JSON storage.
- Canvaya storage uses a small `milla/index.json` board index plus one JSON file per board under `milla/boards/`.
- Multi-board library uses the split board storage so each board remains separate.
- Existing old localStorage board data is migrated into the file-backed default board when possible.
- Mounted as an isolated React app inside the existing Electron/Vite workspace.
- Canvaya CSS is scoped under `.milla-app` so its canvas styles do not leak into the rest of Panora.

## Diary

- Dedicated Diary app.
- First view is a diary book library.
- Library displays books on visual shelving.
- Create multiple diary books.
- Diary books have title, description, cover color, created date, and spread count.
- Select a diary book to preview details.
- Continue reading from selected book.
- Edit diary book title and description.
- Change diary book cover color.
- Delete diary books.
- Search diary books.
- Open book editor from library.
- Two-page spread editor.
- Free-form draggable elements.
- Resize elements.
- Duplicate selected element.
- Delete selected element.
- Add text element.
- Add raw image element.
- Add polaroid/image-card element.
- Add sticky note element.
- Add checklist element.
- Raw images render as plain images.
- Image cards render in a polaroid-inspired style with tape and caption.
- Image paths are stored through Electron file picker, not embedded as blobs.
- Per-element font family.
- Font choices include serif, handwritten, casual, journal, clean, and mono.
- Per-element font size.
- Bold formatting.
- Italic formatting.
- Text color.
- Sticky note background color.
- Text alignment: left, center, right, and justify.
- Checklist rows with check icon styling.
- Checklist item creation through Enter.
- Checklist item removal through backspace/empty behavior.
- Plain date on each spread.
- Add new spread.
- Previous/next spread navigation.
- Compact toolbar controls.
- Zoom in/out/reset.
- Fullscreen mode.
- Page texture picker.
- Page textures include paper fiber, photo overlay, crumpled, linen, warm paper, soft grid, and clean.
- Photo overlay texture uses transparent image overlay, multiply blend, opacity, brightness, and contrast styling inspired by `notebook.htm`.
- Subtle two-page spine/separator.
- Autosave with debounce so typing and dragging do not constantly save every instant.
- Saves diary index separately from each spread for lighter large-book behavior.
- Spread-based storage strategy suitable for books with many pages.

## Goal Tracker

- Dedicated Goal Tracker app.
- Multiple goal trackers.
- Left sidebar lists only goal trackers.
- Add new goal tracker.
- Rename goal tracker.
- Delete goal tracker.
- Select active goal tracker.
- Collapsible goal tracker sidebar.
- Sidebar hidden/open state persists.
- Visual map area.
- Upload/change map image.
- Map images now use path-based storage through Electron, similar to Diary.
- Existing old base64 map data remains readable for backward compatibility.
- Default map image from `public/bg_motivation.png`.
- Editable tracker title.
- Pin milestone cards on the map.
- Milestone cards have x/y map position.
- Milestone card title.
- Milestone description.
- Milestone due date.
- Milestone completion status.
- Milestone progress calculated from checklist/list items.
- Click milestone to open right-side preview drawer.
- Drawer has title, description, due date chip, progress bar, checklist, action buttons, and delete.
- Edit milestone title, description, and due date.
- Add checklist/list items.
- Edit existing checklist/list items inline.
- Remove checklist/list items.
- Empty checklist stays empty instead of regenerating defaults.
- Mark milestone as done.
- Mark milestone as in progress.
- Delete milestone.
- Completed pins use green.
- In-progress pins use neutral gray.
- Active pin/card selection styling.
- Right drawer layout inspired by the reference goal tracker design.

## Excalidraw

- Dedicated Excalidraw app.
- Scratch Excalidraw canvas.
- Open `.excalidraw` files.
- Save Excalidraw files.
- Autosave/dirty-state integration.
- React-based Excalidraw mount inside the Electron app.
- Handles save callbacks and active tab state.

## Note Deck

- Dedicated Note Deck app.
- Opens to a board library for managing multiple note boards.
- Create separate boards for work, home, travel, planning, and other contexts.
- Board library supports search, open, rename, duplicate, and delete actions.
- Each board opens as a freeform note deck with note, checklist, bookmark, file, photo, flashcard, countdown, budget, Eisenhower, time block, and date block cards.
- New users start with an empty library and empty boards instead of default sample notes.
- Note Deck stores board metadata separately from board content for large-board scalability.
- Note Deck uses Electron file-backed split storage under `note-deck/index.json` plus one board JSON file per board.

## Gallery View

- Open folders as visual gallery views.
- Grid, list, and nested tree folder views.
- Tree view expands subfolders inline.
- Tree view has a user-selectable depth limit, defaulting to 4 levels.
- Grid and list view preference is remembered; tree view is manual-only and is not saved as the default.
- Navigate into folders from gallery.
- Go back to previous folder.
- Open image/media files from gallery.
- Display visual cards for file entries.
- Folder-aware layout for browsing local media.

## Jupyter Notebook

- Open `.ipynb` files.
- Notebook rendering.
- Rich output rendering, including image outputs.
- Run Python code cells through Electron IPC.
- Restart Python kernel.
- Per-file kernel support.

## Document Readers

- DOCX preview through `docx-preview`.
- Legacy DOC extraction through `word-extractor`.
- XLS/XLSX reading through `xlsx`.
- PDF reading through `pdfjs-dist`.
- Local file icon support for system-like document display.

## Local Storage And Persistence

- Normal files save to disk.
- Kanban data persists through Electron IPC.
- Diary library, book index, and spreads persist through Electron IPC.
- Notes persist locally with a split file-backed index plus per-note content storage, with localStorage fallback.
- Canvaya persists locally with a split file-backed index plus per-board JSON storage, with localStorage fallback.
- Note Deck persists locally with a split file-backed index plus per-board JSON storage, with localStorage fallback.
- Goal Tracker library currently persists in browser local storage for tracker metadata and card data.
- Folder Forge draft and last destination persist in browser local storage.
- Goal Tracker map image path is stored as a path reference instead of base64 for new uploads.
- Diary image elements store file paths.
- Kanban attachments store file paths and URLs, not blobs.
- Local media URLs are resolved at render time through the Electron local media protocol.

## Design Language

- Desktop productivity layout.
- Sidebar plus tabbed editor shell.
- Soft shadows and warm neutral surfaces.
- Compact controls for dense tools.
- Icon-first buttons where useful.
- Cards used for repeated items, modals, and contained tools.
- Diary has a warm book/library visual style.
- Kanban has a professional clean board style.
- Folder Forge has a light two-panel planning and preview style.
- Canvaya has a flexible canvas/whiteboard style.
- Goal Tracker has a visual map/milestone style.
- Toolbar-heavy apps prioritize practical controls over marketing screens.

## Current App Launcher Items

- YouTube Studio.
- Kanban Board.
- Notes.
- Note Deck.
- Folder Forge.
- Canvaya.
- Goal Tracker.
- Diary.
- Excalidraw.

## Removed Features

- The old standalone Text Editor app entry was removed.
- The old Word+ Editor app entry was removed.
- The core file/code editor remains because it is part of the main shell, not those removed app entries.

## Important Implementation Notes

- This is an Electron app, so selected local file paths can be safely handled through the app-controlled Electron bridge.
- A normal browser website cannot reliably store and reuse arbitrary local file paths, but this desktop app can use `electronAPI` and `local-media://` to display selected files.
- For large future features, prefer path references or per-document storage instead of embedding large blobs in one large object.
- For large collections, prefer split storage by entity: per diary book, per diary spread, per Kanban board, per Canvaya board, or per goal tracker.
- Avoid saving huge base64 images in local storage.
- For new image-heavy features, follow the Diary/Goal Tracker path-based approach.
- Folder Forge creates folders through Electron IPC and validates that generated paths stay inside the selected destination folder.
- Canvaya is integrated from `milla-electron-dist`, with the original localStorage persistence replaced by Electron file-backed JSON storage.
