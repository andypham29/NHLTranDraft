import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { MatSnackBar} from "@angular/material";

import { IssueService} from "../../issue.service";
import { Issue } from '../../issue.model';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  constructor(private issueService: IssueService) { }

  ngOnInit() {
  }

}
