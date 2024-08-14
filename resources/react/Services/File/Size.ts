class Size {

  /**
   * Get file size in MB
   * 
   * @param { File } file
   * @return { number }
   */
  public getFileSizeMB(file: File): number {
    return (file.size / 1024) / 1024;
  }

}

export default Size;