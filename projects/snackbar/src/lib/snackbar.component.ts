import {
  AfterViewInit,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
  TemplateRef,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'ppr-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.scss'],
})
export class PprSnackbarComponent implements OnChanges, AfterViewInit {
  @Input() type: PprSnackbarType = 'info';
  @Input() titleText = '';
  @Input() messageText = '';

  @Output() dismissEvent = new EventEmitter<void>();

  @ViewChild('infoIcon') infoIcon: TemplateRef<unknown>;
  @ViewChild('warningIcon') warningIcon: TemplateRef<unknown>;
  @ViewChild('dangerIcon') dangerIcon: TemplateRef<unknown>;

  mainClass = 'ppr-snackbar';
  icon: TemplateRef<unknown>;
  TYPE_TO_ICON_DICT: Record<PprSnackbarType, TemplateRef<unknown>> | {} = {};

  private readonly TYPE_TO_CLASS_DICT: Record<PprSnackbarType, string> = {
    info: 'ppr-snackbar--info',
    warning: 'ppr-snackbar--warning',
    danger: 'ppr-snackbar--danger',
  };

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.type) {
      this.mainClass = `ppr-snackbar ${this.TYPE_TO_CLASS_DICT[this.type]}`;
    }
  }

  ngAfterViewInit(): void {
    this.TYPE_TO_ICON_DICT = {
      info: this.infoIcon,
      warning: this.warningIcon,
      danger: this.dangerIcon,
    };
  }

  dismiss() {
    this.dismissEvent.emit();
  }
}

export type PprSnackbarType = 'info' | 'warning' | 'danger';
