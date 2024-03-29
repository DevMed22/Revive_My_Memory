package com.example.revive

import android.app.Activity
import android.app.DatePickerDialog
import android.app.TimePickerDialog
import android.os.Bundle
import android.view.View
import androidx.appcompat.app.AppCompatActivity
import androidx.databinding.DataBindingUtil
import androidx.recyclerview.widget.LinearLayoutManager
import java.text.SimpleDateFormat
import java.util.*
import com.example.revive.databinding.ActivityMainBinding
import kotlinx.android.synthetic.main.activity_main.*

class MainActivity : AppCompatActivity(), OnItemClick {

    val list = mutableListOf<TaskListData>()

    val c = Calendar.getInstance()

    val month: Int = c.get(Calendar.MONTH)
    val year: Int = c.get(Calendar.YEAR)
    val day: Int = c.get(Calendar.DAY_OF_MONTH)

    var cal = Calendar.getInstance()

    private val listAdapter = ListAdapter(list, this)

    private lateinit var binding:ActivityMainBinding

    private lateinit var viewModel: TaskListViewModel


    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)

        binding = DataBindingUtil.setContentView(this, R.layout.activity_main)
        binding.lifecycleOwner = this
        viewModel = ViewModelProviders.of(this).get(TaskListViewModel::class.java)

        rvTodoList.layoutManager = LinearLayoutManager(this)
        rvTodoList.adapter = listAdapter
        binding.vieModel = viewModel


        viewModel.getPreviousList()  /* fetch all data */

        viewModel.taskList.observe(this, androidx.lifecycle.Observer {
            //list.addAll(it)
            if (it == null)
                return@Observer

            list.clear()
            val tempList = mutableListOf<TaskListData>()
            it.forEach {
                tempList.add(
                    TaskListData(
                        title = it.title,
                        date = it.date,
                        time = it.time,
                        indexDb = it.id,
                        isShow = it.isShow
                    )
                )

            }

            list.addAll(tempList)
            listAdapter.notifyDataSetChanged()
            viewModel.position = -1;

            viewModel.taskList.value = null
        })

        viewModel.taskListData.observe(this, androidx.lifecycle.Observer {
            if (viewModel.position != -1) {
                list.set(viewModel.position, it)
                listAdapter.notifyItemChanged(viewModel.position)
            } else {
                list.add(it)
                listAdapter.notifyDataSetChanged()
            }
            viewModel.position = -1;
        })

        etdate.setOnClickListener {

            val dpd = DatePickerDialog(this, DatePickerDialog.OnDateSetListener { view, year, monthOfYear, dayOfMonth ->

                // Display Selected date in textbox
                etdate.setText("" + dayOfMonth + "/" + (monthOfYear + 1) + "/" + year)
                viewModel.month = monthOfYear
                viewModel.year = year
                viewModel.day = dayOfMonth
            }, year, month, day)

            dpd.datePicker.minDate = System.currentTimeMillis() - 1000
            dpd.show()

        }
        etTime.setOnClickListener {
            val cal = Calendar.getInstance()
            val timeSetListener = TimePickerDialog.OnTimeSetListener { timePicker, hour, minute ->
                cal.set(Calendar.HOUR_OF_DAY, hour)
                cal.set(Calendar.MINUTE, minute)
                this.cal.set(Calendar.HOUR_OF_DAY, hour)
                this.cal.set(Calendar.MINUTE, minute)

                viewModel.hour = hour
                viewModel.minute = minute

                etTime.setText(SimpleDateFormat("HH:mm").format(cal.time))
            }

            this.cal = cal
            TimePickerDialog(
                this,
                timeSetListener,
                cal.get(Calendar.HOUR_OF_DAY),
                cal.get(Calendar.MINUTE),
                true
            ).show()
        }
    }


    override fun onResume() {
        super.onResume()
    }


    override fun onItemClick(v: View, position: Int) {


        alert {
            message = list.get(position).title
            positiveButton("Edit") {
                viewModel.title.set(list[position].title)
                viewModel.date.set(list[position].date)
                viewModel.time.set(list[position].time)
                viewModel.position = position
                viewModel.index = list[position].indexDb
                editText.isFocusable = true
            }
            negativeButton("Delete") {
                viewModel.delete(list[position].indexDb)
            }

        }.show()

    }

    override fun onStop() {
        super.onStop()
    }
}
