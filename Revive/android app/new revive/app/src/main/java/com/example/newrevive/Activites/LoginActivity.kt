package com.example.newrevive.Activites

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import com.example.newrevive.databinding.ActivityLoginBinding

class LoginActivity : AppCompatActivity() {
    private lateinit var binding: ActivityLoginBinding
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        binding= ActivityLoginBinding.inflate(layoutInflater)
        setContentView(binding.root)

        binding.dontHaveAccount.setOnClickListener {
            startActivity(Intent(this, RegisterActivity::class.java))

        }
        binding.btnLoginScreen.setOnClickListener {
            startActivity(Intent(this, HomeActivity::class.java))

        }


    }
}