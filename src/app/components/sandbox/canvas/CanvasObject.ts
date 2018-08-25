export interface CanvasObject {
  isHidden: boolean;
  isDragEnabled: boolean;
  animations: Array<Function>;
  draw(context: CanvasRenderingContext2D, timestamp: number);
  isPositionHit(posX: number, posY: number): boolean;
}
