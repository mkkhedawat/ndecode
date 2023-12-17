let initialized = false;

const icons = [
  "description",
  "content_copy",
  "dashboard",
  "edit_note",
  "menu_book",
  "grid_view",
  "list",
  "folder",
  "list_alt",
  "inventory",
  "folder_open",
  "article",
  "fact_check",
  "attach_file",
  "format_list_bulleted",
  "assignment",
  "task",
  "checklist",
  "cloud_upload",
  "draft",
  "summarize",
  "cloud",
  "draw",
  "feed",
  "newspaper",
  "view_list",
  "file_copy",
  "note_add",
  "border_color",
  "book",
  "history_edu",
  "design_services",
  "pending_actions",
  "format_quote",
  "post_add",
  "request_quote",
  "cloud_download",
  "drag_handle",
  "table",
  "contact_page",
  "archive",
  "space_dashboard",
  "content_paste",
  "percent",
  "attachment",
  "assignment_ind",
  "format_list_numbered",
  "assignment_turned_in",
  "tag",
  "table_chart",
  "dashboard_customize",
  "sticky_note_2",
  "text_fields",
  "format_bold",
  "integration_instructions",
  "reorder",
  "find_in_page",
  "text_snippet",
  "note",
  "document_scanner",
  "checklist_rtl",
  "note_alt",
  "edit_document",
  "cloud_sync",
  "table_rows",
  "perm_media",
  "cloud_done",
  "title",
  "table_view",
  "content_cut",
  "data_object",
  "notes",
  "cut",
  "subject",
  "functions",
  "format_italic",
  "content_paste_search",
  "format_color_fill",
  "folder_shared",
  "plagiarism",
  "horizontal_rule",
  "file_present",
  "folder_copy",
  "cloud_off",
  "format_paint",
  "ballot",
  "team_dashboard",
  "format_align_left",
  "view_column",
  "add_link",
  "difference",
  "read_more",
  "view_agenda",
  "format_size",
  "format_underlined",
  "toc",
  "vertical_align_top",
  "height",
  "vertical_align_bottom",
  "view_week",
  "copy_all",
  "drive_folder_upload",
  "assignment_late",
  "format_color_text",
  "low_priority",
  "drive_file_move",
  "view_module",
  "assignment_return",
  "folder_special",
  "segment",
  "format_align_center",
  "calendar_view_month",
  "folder_zip",
  "square",
  "polyline",
  "breaking_news_alt_1",
  "format_align_right",
  "grading",
  "view_headline",
];

const getRandomArbitrary = (min: number, max: number) => {
  return Math.random() * (max - min) + min;
};

const init = (className: string = "background-container") => {
  if (initialized) return;
  initialized = true;

  const createIcon = (container: Element) => {
    const icon = icons[Math.floor(Math.random() * icons.length)];
    const iconElement = document.createElement("i");
    iconElement.classList.add("material-symbols-rounded");
    iconElement.innerText = icon;

    iconElement.style.position = "absolute";
    iconElement.style.zIndex = "-1";
    iconElement.style.left =
      getRandomArbitrary(0, 1) * window.innerWidth + "px";
    iconElement.style.bottom =
      getRandomArbitrary(0, 0.5) * window.innerHeight + "px";
    iconElement.style.opacity = "0.77";
    iconElement.style.color = "#449d5d";
    iconElement.style.pointerEvents = "none";

    container.appendChild(iconElement);
  };

  const numberOfIcons = 50;
  const containers = document.getElementsByClassName(className);
  if (!containers) return;
  for (let i = 0; i < numberOfIcons; i++) {
    createIcon(containers[0]);
  }
};

const background = {
  init,
};
export default background;
