import { style } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: '[app-password]',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.scss']
})
export class PasswordComponent {
  public pass = "";
  public passwordStrength = "";
  public firstColor = "";
  public secondColor = "";
  public thirdColor = "";
  onChange(event){
    this.pass = event.target.value.trim();
    this.checkPasswordStrength();
    this.setColorsFunction();
  }

  checkPasswordStrength() {
    if (this.pass.length === 0){
      this.passwordStrength = "";
    }
    if (this.pass.length > 0){
      this.passwordStrength = "Низький"
    }
    if (/[a-z]/.test(this.pass)&&/[0-9]/.test(this.pass) || /[a-z]/.test(this.pass) && /[^a-zA-Z0-9]/.test(this.pass) || /[0-9]/.test(this.pass) && /[^a-zA-Z0-9]/.test(this.pass)){
      this.passwordStrength = "Середній";
    }
    if (/[a-z]/.test(this.pass) && /[0-9]/.test(this.pass) && /[^a-zA-Z0-9]/.test(this.pass)){
      this.passwordStrength = "Високий";
    }
  }

  setColorsFunction(){
    switch(this.passwordStrength){
      case "Низький":
        if (this.pass.length < 8){
          this.firstColor = "red";
          this.secondColor = "red";
          this.thirdColor = "red";
        } else {
          this.firstColor = "red";
          this.secondColor = "gray";
          this.thirdColor = "gray";
        }
        break;
      case "Середній":
        this.firstColor = "yellow";
        this.secondColor = "yellow";
        this.thirdColor = "gray";
        break;
      case "Високий":
        this.firstColor = "green";
        this.secondColor = "green";
        this.thirdColor = "green";
        break;
      default:
        this.firstColor = "gray";
        this.secondColor = "gray";
        this.thirdColor = "gray";
        break;
    }
  }


}

