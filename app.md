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
- Video Clipper app.
- Select clip start/end.
- Preview video clips.
- Export completed clip.
- Open output folder.
- FFmpeg-backed processing.
- TikTok/Reels style clip workflow.

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
- Delete boards.
- Rename boards.
- Board sidebar for switching projects.
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
- Card priority.
- Priority colors for Low, Medium, and High.
- Card tags.
- Checklist items.
- Subtasks.
- Checklist and subtask status rendering on cards.
- Add/remove checklist items in modal.
- Add/remove subtasks in modal.
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

## Gallery View

- Open folders as visual gallery views.
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
- Goal Tracker library currently persists in browser local storage for tracker metadata and card data.
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
- Goal Tracker has a visual map/milestone style.
- Toolbar-heavy apps prioritize practical controls over marketing screens.

## Current App Launcher Items

- YouTube Studio.
- Video Clipper.
- Kanban Board.
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
- For large collections, prefer split storage by entity: per diary book, per diary spread, per Kanban board, or per goal tracker.
- Avoid saving huge base64 images in local storage.
- For new image-heavy features, follow the Diary/Goal Tracker path-based approach.
