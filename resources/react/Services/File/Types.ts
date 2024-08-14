import Size from "./Size";


class Types extends Size {

  /**
   * Image types
   * 
   * @var { Array<string> }
   */
  private IMAGE_MIMES: Array<string> = [
    'image/jpeg',
    'image/png',
    'image/gif',
    'image/bmp',
    'image/webp',
    'image/ico',
  ];

  /**
   * Videos types
   * 
   * @var { Array<string> }
   */
  private VIDEO_MIMES: Array<string> = [
    'video/mp4',
    'video/webm',
    'video/mpeg',
    'video/ogg',
  ];

  /**
   * Other types
   * 
   * @var { Array<string> }
   */
  private OTHER_MIMES: Array<string> = [
    'application/pdf',
    'application/msword',      // Microsoft Word (.doc)
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document', // Microsoft Word (.docx)
    'application/vnd.ms-excel', // Microsoft Excel (.xls)
    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', // Microsoft Excel (.xlsx)
    'application/vnd.ms-powerpoint', // Microsoft PowerPoint (.ppt)
    'application/vnd.openxmlformats-officedocument.presentationml.presentation', // Microsoft PowerPoint (.pptx)
    'text/plain',               // Plain text files (.txt)
    'text/csv',                 // CSV files (.csv)
    'application/rtf',          // Rich Text Format (.rtf)
    'application/zip',          // ZIP files
    'application/x-tar',        // TAR files
    'application/x-rar-compressed', // RAR files
    'application/x-7z-compressed' // 7z files
  ];

  constructor() {
    super();
  }

  /**
   * Get image mimes
   * 
   * @return { Array<string> }
   */
  public getImageMimes(): Array<string> {
    return this.IMAGE_MIMES;
  }

  /**
   * Get video mimes
   * 
   * @return { Array<string> }
   */
  public getVideoMimes(): Array<string> {
    return this.VIDEO_MIMES;
  }

  /**
   * Get other mimes
   * 
   * @return { Array<string> }
   */
  public getOtherMimes(): Array<string> {
    return this.OTHER_MIMES;
  }

  /**
   * Check if file is an image
   * 
   * @param { File } file
   * @return { boolean }
   */
  public isImage(file: File): boolean {
    return this.IMAGE_MIMES.includes(file.type);
  }

  /**
   * Check if file is a video
   * 
   * @param { File } file
   * @return { boolean }
   */
  public isVideo(file: File): boolean {
    return this.VIDEO_MIMES.includes(file.type);
  }

  /**
   * Get file url
   * 
   * @param { File } file
   * @return { string }
   */
  public getFileUrl(file: File): string {
    return URL.createObjectURL(file);
  }

}

export default Types;